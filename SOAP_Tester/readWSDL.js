var nameFromGX = 'QUERY';

function readWSDL() {

    localStorage.setItem('wsdlStatus','init');
    localStorage.setItem('wsdlEmptyRequest','');

    console.log('func readWSDL V0.0002');

    var wsdlURL = 'http://puntoexe.com.uy:8115/iGMP4trunk/api.inventory.asoaptinventoryv1.aspx?wsdl';
    
    //wsdl request
    var client = new XMLHttpRequest();
    client.open('GET', wsdlURL);
    client.onreadystatechange = function () {
        var request = client.responseText;//here the wsdl
        
        if (request.length > 0)
        {
            request = processWSDL(request);

            localStorage.setItem('wsdlEmptyRequest',request);
            localStorage.setItem('wsdlStatus','done');
        }
    }

    client.send();
}

var xmlDoc;
function processWSDL(xmlAsString) {

    var newRequest = "";

    // Criar um novo parser DOM
    const parser = new DOMParser();

    // Converter a string XML em um objeto XML
    xmlDoc = parser.parseFromString(xmlAsString, "text/xml");

    // Extrai informações necessárias do XML
    const operations = xmlDoc.querySelectorAll("portType operation");

    // Cria um objeto para armazenar informações do request
    const jsonRequest = {
        operations: []
        };

    var elemTarget1, auxWS_METHOD, elemTarget3, elemTarget4, elemTarget5, elemTarget6, elemTarget7, elemTarget8;

    // Itera sobre as operações no WSDL
    operations.forEach(operation => {
        const operationName = operation.getAttribute("name");
        const inputMessage = operation.querySelector("input").getAttribute("message");

        // Adiciona informações da operação ao objeto JSON de request
        jsonRequest.operations.push({
            operationName,
            inputMessage
            // Adicione mais informações conforme necessário
        });

        if (operationName == nameFromGX)
        {
            console.log('asaSAS');

            for (let iTagert1 = 0; iTagert1 < operation.children.length; iTagert1++) {
                var nodeName = operation.children[iTagert1].nodeName;
                console.log('nodeName = ' + nodeName);

                if (operation.children[iTagert1].nodeName == "input")
                {
                    var arrayAuxStr = operation.children[iTagert1].attributes[0].textContent.split(':');
                    elemTarget1 = arrayAuxStr[arrayAuxStr.length-1];
                    console.log('elemTarget1 = ' + elemTarget1);

                    var arrayAuxStr2 = xmlDoc.getElementsByName(elemTarget1)[0].querySelector('[name="parameters"]').getAttribute('element').split(':');
                    auxWS_METHOD = arrayAuxStr2[arrayAuxStr2.length-1];

                    elemTarget3 = xmlDoc.getElementsByName(auxWS_METHOD)[0].querySelector('[name="Queryin"]');


                    var arrayAuxStr3 = elemTarget3.getAttribute('type').split(':');
                    elemTarget4 = arrayAuxStr3[arrayAuxStr3.length-1];

                    elemTarget5 = xmlDoc.getElementsByName(elemTarget4);
                    
                    var arrayAuxStr4 = elemTarget5[0].querySelector('[name="Data"]').getAttribute('type').split(':');
                    elemTarget6 = arrayAuxStr4[arrayAuxStr4.length-1];

                    elemTarget7 = xmlDoc.getElementsByName(elemTarget6)[0];


                    var arrayAuxStr5 = elemTarget7.querySelector('[name="Filters"]').getAttribute('type').split(':');
                    elemTarget8 = arrayAuxStr5[arrayAuxStr5.length-1];

                    elemTarget9 = xmlDoc.getElementsByName(elemTarget8)[0];

                    var vetFilters = [];
                    var jsonFilters = {
                        filter: []
                    };

                    var auxFILTERS = '';
                    var prefixFilters = 'igm:';

                    for (let iFilters = 0; iFilters < elemTarget9.children[0].children.length; iFilters++) {
                        var filter = elemTarget9.children[0].children[iFilters];
                        var fName = filter.getAttribute('name');
                        var fType = filter.getAttribute('type');

                        jsonFilters.filter.push({fName,fType});
                        
                        var vetFilter = [];
                        vetFilter.push(fName);
                        vetFilter.push(fType.replace('xsd:',''));

                        vetFilters.push(vetFilter);

                        auxFILTERS += '<' + prefixFilters + fName + '></' + prefixFilters + fName + '>';


                        console.log("fim loop. fName = " + fName + ' fType ' + fType);
                    }


                    var templateRequest = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:igm="iGMP4">' +
                                            '<soapenv:Header/>' +
                                            '<soapenv:Body>' +
                                                '<igm:[[WS_METHOD]]>' +
                                                    '<igm:Queryin>' +
                                                        '<igm:Connection>' +
                                                        '<igm:UserCode></igm:UserCode>' +
                                                        '<igm:UserPassword></igm:UserPassword>' +
                                                        '</igm:Connection>' +
                                                        '<igm:Data>' +
                                                            '<igm:Filters>' +
                                                                '[[FILTERS]]' +
                                                            '</igm:Filters>' +
                                                            '<igm:Page></igm:Page>' +
                                                        '</igm:Data>' +
                                                    '</igm:Queryin>' +
                                                '</igm:[[WS_METHOD]]>' +
                                            '</soapenv:Body>' +
                                            '</soapenv:Envelope>';
                
                    newRequest = templateRequest.replaceAll('[[WS_METHOD]]',auxWS_METHOD);
                    newRequest = newRequest.replace('[[FILTERS]]',auxFILTERS);

                    //console.log('newRequest = ' + newRequest);

                    console.log("fim op");

                }
            }
        }
    });

    return newRequest;

    /*
    for (let i = 0; i < jsonRequest.operations.length; i++) {
        console.log(jsonRequest.operations[i].operationName + ' -> ' + jsonRequest.operations[i].inputMessage);

        if (jsonRequest.operations[i].operationName == nameFromGX) {
            console.log("Found operation......");   // ->  wsdlns:API.Inventory.SOAPTInventoryV1.QUERYSoapIn
            
            var elemOperationMessa = '';
            
            var target = 0;


        }
        
    }*/
}