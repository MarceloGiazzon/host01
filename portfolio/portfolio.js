// LANG START
let currentLang = 'en'; // Corrected variable name

function changeLanguage(lang) {
    currentLang = lang;
    
    // 1. Update language content blocks
    document.querySelectorAll('.lang-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelector(`.lang-content[data-lang="${lang}"]`).classList.add('active');
    
    // 2. Update button active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // Use 'this' or event.target if called from an inline event handler, 
    // but the safer way is to find the corresponding button.
    document.querySelector(`.lang-btn[title*="${lang === 'en' ? 'Eng' : lang === 'es' ? 'Esp' : 'Por'}"]`).classList.add('active');

    // NEW: If a file is currently open, reload the iframe with the new language.
    if (currentFileIndex !== -1) {
        const openedFile = allFiles[currentFileIndex];
        // This will call openFile(openedFile) which forces the iframe to reload 
        // using the newly set 'currentLang' variable.
        openFile(openedFile); 
    }
}
// LANG END

portfolioData = [
{
"id": "root",
"name": "Root",
"nameEsp": "Raíz",
"namePor": "Raiz",
"type": "folder",
"expanded": true,
"children": [
{
        "id": "5221651e-73e0-4a2a-9f41-273e3740729b",
        "name": "Genexus User Controls",
        "nameEsp": "Controles de Usuario de Genexus",
        "namePor": "Controles de Usuário Genexus",
        "type": "folder",
        "children": [
        {
            "id": "28ec9cca-169f-4f1e-b1d3-6a47aa769197",
            "name": "Smart Menus",
            "nameEsp": "Menús Inteligentes",
            "namePor": "Menus Inteligentes",
            "text": "A versatile and highly configurable multi-level menu User Control for GeneXus Web applications, built on the SmartMenus jQuery plugin. It offers an advanced responsive design that adapts seamlessly to desktop and mobile environments. Key features include: support for deep multi-level hierarchies, extensive configuration options for theming and behavior, dynamic status updates with badges, and a integrated search functionality.",
            "textEsp": "Un Control de Usuario de menú multinivel versátil y altamente configurable para aplicaciones web GeneXus, construido sobre el plugin jQuery SmartMenus. Ofrece un diseño avanzado adaptable que se ajusta perfectamente a entornos de escritorio y móviles. Las características clave incluyen: soporte para jerarquías profundas de múltiples niveles, amplias opciones de configuración para temas y comportamiento, actualizaciones de estado dinámicas con insignias y una funcionalidad de búsqueda integrada.",
            "textPor": "Um Controle de Usuário de menu multinível versátil e altamente configurável para aplicações web GeneXus, construído sobre o plugin jQuery SmartMenus. Oferece um design responsivo avançado que se adapta perfeitamente a ambientes desktop e mobile. As principais características incluem: suporte para hierarquias profundas de vários níveis, amplas opções de configuração para temas e comportamento, atualizações dinâmicas de status com crachás e uma funcionalidade de pesquisa integrada.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/SmartMenus.html",
            "links": [
            {
                "name": "Documentation",
                "url": "https://sites.google.com/puntoexe.com.uy/pxtools-manual/user-controls/smart-menu"
            },
            {
                "name": "Genexus Marketplace",
                "url": "https://marketplace.genexus.com/product.aspx?pxtoolssmartmenu"
            }
            ]
        },
        {
            "id": "e3a72909-45d3-44dc-805f-54293a9ec747",
            "name": "Responsive Layout",
            "nameEsp": "Diseño Adaptable",
            "namePor": "Layout Responsivo",
            "text": "A powerful and dynamic Responsive Layout Manager designed for GeneXus Master Pages, enabling the creation of complex, adaptable interfaces. It provides up to four distinct and configurable zones (Top, Left, Right, Bottom) around a central content area. The configuration for each zone is granularly controlled by Bootstrap dimensions (xs, sm, md, lg), allowing for specific behaviors across different device screen sizes. This control manages the behavior of these zones, allowing for features like scroll-impact logic (to dynamically show/hide components based on user scrolling), Minimize/Maximize states, and full mobile support including swipe gestures to control the side panels.",
            "textEsp": "Un gestor de diseño adaptable potente y dinámico diseñado para las Master Pages de GeneXus, que permite la creación de interfaces complejas y adaptables. Proporciona hasta cuatro zonas distintas y configurables (Superior, Izquierda, Derecha, Inferior) alrededor de un área de contenido central. La configuración de cada zona se controla de forma granular mediante las dimensiones de Bootstrap (xs, sm, md, lg), lo que permite comportamientos específicos en diferentes tamaños de pantalla de dispositivos. Este control gestiona el comportamiento de estas zonas, permitiendo funcionalidades como lógica de impacto de desplazamiento (para mostrar/ocultar componentes dinámicamente según el desplazamiento del usuario), estados de Minimizar/Maximizar y soporte móvil completo, incluyendo gestos de deslizamiento para controlar los paneles laterales.",
            "textPor": "Um Gerenciador de Layout Responsivo poderoso e dinâmico, projetado para Master Pages GeneXus, permitindo a criação de interfaces complexas e adaptáveis. Ele fornece até quatro zonas distintas e configuráveis (Topo, Esquerda, Direita, Fundo) em torno de uma área de conteúdo central. A configuração para cada zona é controlada granularmente pelas dimensões do Bootstrap (xs, sm, md, lg), permitindo comportamentos específicos em diferentes tamanhos de tela de dispositivos. Este controle gerencia o comportamento dessas zonas, permitindo recursos como lógica de impacto de rolagem (para mostrar/ocultar componentes dinamicamente com base na rolagem do usuário), estados de Minimizar/Maximizar e suporte móvel completo, incluindo gestos de deslizar para controlar os painéis laterais.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/ResponsiveLayout.html",
            "links": [
            {
                "name": "Documentation",
                "url": "https://sites.google.com/puntoexe.com.uy/pxtools-manual/user-controls/responsive-layout"
            },
            {
                "name": "Genexus Marketplace",
                "url": "https://marketplace.genexus.com/product.aspx?pxtoolsresponsivelayout"
            }
            ]
        },
        {
            "id": "f1a8c4b1-6a0e-47f5-a1d2-9c3f0b2e1d75",
            "name": "Contextual Box",
            "nameEsp": "Caja Contextual",
            "namePor": "Caixa Contextual",
            "text": "Based on a data provider, allows to create floating boxes on runtime. You can define labels, inputs, buttons, icons and slide controls. Allows multiple instances, for the use on grids. Options can be enabled or disabled, based on the context (grid row values, as an example). Currently, two levels are supported.",
            "textEsp": "Basado en un proveedor de datos, permite crear cajas flotantes en tiempo de ejecución. Puede definir etiquetas, entradas, botones, íconos y controles deslizantes. Permite múltiples instancias, para uso en grillas. Las opciones pueden habilitarse o deshabilitarse, según el contexto (valores de fila de grilla, por ejemplo). Actualmente, se admiten dos niveles.",
            "textPor": "Baseado em um provedor de dados, permite criar caixas flutuantes em tempo de execução. Você pode definir rótulos, entradas, botões, ícones e controles deslizantes. Permite múltiplas instâncias, para uso em grades. As opções podem ser ativadas ou desativadas, com base no contexto (valores de linha da grade, por exemplo). Atualmente, dois níveis são suportados.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/ContextualBox.html"
        },
        {
            "id": "d2b9d5c2-7b1f-48e6-b2c3-0d4a1c3f2e86",
            "name": "Grid Paging",
            "nameEsp": "Paginación de Grilla",
            "namePor": "Paginação de Grade",
            "text": "Responsive control that manages page navigation. Includes Rows per Page properties and a slide control to an easy page jump.",
            "textEsp": "Control adaptable que gestiona la navegación por páginas. Incluye propiedades de Filas por Página y un control deslizante para un fácil salto de página.",
            "textPor": "Controle responsivo que gerencia a navegação de páginas. Inclui propriedades de Linhas por Página e um controle deslizante para facilitar o salto de página.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/GridPaging.html"
        },
        {
            "id": "c3c0e6d3-8c20-49d7-c3b4-1e5b2d4e3f97",
            "name": "Grid Fixed Columns",
            "nameEsp": "Columnas Fijas de Grilla",
            "namePor": "Colunas Fixas de Grade",
            "text": "Keep one or more column fixed on the extremes of a grid. Can be set on both sides (right and/or left).",
            "textEsp": "Mantiene una o más columnas fijas en los extremos de una grilla. Se puede configurar en ambos lados (derecha y/o izquierda).",
            "textPor": "Mantém uma ou mais colunas fixas nas extremidades de uma grade. Pode ser configurado em ambos os lados (direito e/ou esquerdo).",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/GridFixedColumns.html"
        },
        {
            "id": "b4d1f7e4-9d31-4ac8-d4a5-2f6c3e5a40a8",
            "name": "Grid Fixed Title",
            "nameEsp": "Título Fijo de Grilla",
            "namePor": "Título Fixo de Grade",
            "text": "Keep the header of a grid fixed and visible when doing vertical scroll.",
            "textEsp": "Mantiene el encabezado de una grilla fijo y visible al hacer scroll vertical.",
            "textPor": "Mantém o cabeçalho de uma grade fixo e visível ao fazer rolagem vertical.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/GridFixedTitles.html"
        },
        {
            "id": "a5e208f5-a042-4bd9-e596-307d4f6b51b9",
            "name": "Grid Handler",
            "nameEsp": "Manejador de Grilla",
            "namePor": "Manipulador de Grade",
            "text": "Allows moving, hiding, or showing grid columns. Save and load the grid state on the database (using web services) to 'remember' the user choices.",
            "textEsp": "Permite mover, ocultar o mostrar columnas de grilla. Guarda y carga el estado de la grilla en la base de datos (mediante servicios web) para 'recordar' las elecciones del usuario.",
            "textPor": "Permite mover, ocultar ou mostrar colunas da grade. Salva e carrega o estado da grade no banco de dados (usando serviços web) para 'lembrar' as escolhas do usuário.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/GridHandler.html"
        },
        {
            "id": "96f31906-b153-4cea-f687-418e507c62ca",
            "name": "Horizontal Scroll Buttons",
            "nameEsp": "Botones de Scroll Horizontal",
            "namePor": "Botões de Rolagem Horizontal",
            "text": "User control for desktop only. Add floating buttons near the bottom of the browser visible area, when a grid has scroll in both directions. The objective is to avoid forcing the user to go to the bottom of the grid just to make the horizontal scroll. Auto hides when it detects it is not required, by the grid dimension or by the current vertical scroll position.",
            "textEsp": "Control de usuario solo para escritorio. Agrega botones flotantes cerca de la parte inferior del área visible del navegador, cuando una grilla tiene scroll en ambas direcciones. El objetivo es evitar forzar al usuario a ir al final de la grilla solo para realizar el scroll horizontal. Se oculta automáticamente cuando detecta que no es necesario, por la dimensión de la grilla o por la posición actual del scroll vertical.",
            "textPor": "Controle de usuário apenas para desktop. Adiciona botões flutuantes próximos à parte inferior da área visível do navegador, quando uma grade possui rolagem em ambas as direções. O objetivo é evitar forçar o usuário a ir para o final da grade apenas para fazer a rolagem horizontal. Oculta-se automaticamente quando detecta que não é necessário, pela dimensão da grade ou pela posição atual da rolagem vertical.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/HorizontalScrollButtons.html"
        },
        {
            "id": "87042a17-c264-4dfb-0778-529f618d73db",
            "name": "Screenshotter",
            "nameEsp": "Capturador de Pantalla",
            "namePor": "Capturador de Tela",
            "text": "By default triggered by Ctrl + i, it allows to select and capture browser view. Allows selecting color, draw rectangles, circles, arrows and writing text as well. Supports the option to copy to clipboard, get the base 64 content (to be used on some Genexus event), save on disk or save on Google Drive.",
            "textEsp": "Activado por defecto con Ctrl + i, permite seleccionar y capturar la vista del navegador. Permite seleccionar color, dibujar rectángulos, círculos, flechas y escribir texto. Admite la opción de copiar al portapapeles, obtener el contenido base 64 (para ser utilizado en algún evento Genexus), guardar en disco o guardar en Google Drive.",
            "textPor": "Acionado por padrão com Ctrl + i, permite selecionar e capturar a visualização do navegador. Permite selecionar cor, desenhar retângulos, círculos, setas e escrever texto. Suporta a opção de copiar para a área de transferência, obter o conteúdo base 64 (para ser usado em algum evento Genexus), salvar em disco ou salvar no Google Drive.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/Screenshotter.html"
        },
        {
            "id": "78153b28-d375-4e0c-1869-63af729e84ec",
            "name": "Camera Scan",
            "nameEsp": "Escaneo con Cámara",
            "namePor": "Leitura de Câmera",
            "text": "Allows the mobile camera to be used as a barcode scanner. Supported formats can be defined, including most barcode types and QR code.",
            "textEsp": "Permite usar la cámara del móvil como escáner de códigos de barras. Se pueden definir formatos compatibles, incluyendo la mayoría de los tipos de códigos de barras y códigos QR.",
            "textPor": "Permite que a câmera do celular seja usada como um scanner de código de barras. Os formatos suportados podem ser definidos, incluindo a maioria dos tipos de códigos de barras e código QR.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/CameraScan.html"
        },
        {
            "id": "69264c39-e486-4f1d-295a-74be83af95fd",
            "name": "Input Auto Complete",
            "nameEsp": "Autocompletar Entrada",
            "namePor": "Autocompletar Entrada",
            "text": "Allows suggesting options to autocomplete when the user is entering specific fragments of text on some inputs. Triggered by Ctrl + space on desktop or long press on mobile.",
            "textEsp": "Permite sugerir opciones para autocompletar cuando el usuario está ingresando fragmentos de texto específicos en algunas entradas. Se activa con Ctrl + espacio en escritorio o pulsación larga en móvil.",
            "textPor": "Permite sugerir opções para autocompletar quando o usuário está inserindo fragmentos específicos de texto em algumas entradas. Acionado por Ctrl + espaço no desktop ou toque longo no mobile.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/InputAutoComplete.html"
        },
        {
            "id": "5a375d4a-f597-402e-3a4b-85cf94b0a60e",
            "name": "Point of Sale",
            "nameEsp": "Punto de Venta",
            "namePor": "Ponto de Venda",
            "text": "Complete and independent interface for POS. Communicates with the server side only by web services. Designed to be used mainly by a Code Bar Scanner, but supports manual entries. Responsive, it allows using the mobile camera as code bar scanner or audio as text entry. Items can be manually entered when WS don’t find a item. Also, manages an items queue when the connection is unstable.",
            "textEsp": "Interfaz completa e independiente para POS. Se comunica con el lado del servidor solo mediante servicios web. Diseñado para ser utilizado principalmente por un escáner de código de barras, pero admite entradas manuales. Adaptable, permite usar la cámara del móvil como escáner de código de barras o audio como entrada de texto. Los artículos se pueden ingresar manualmente cuando los servicios web no encuentran un artículo. Además, gestiona una cola de artículos cuando la conexión es inestable.",
            "textPor": "Interface completa e independente para PDV. Comunica-se com o lado do servidor apenas por meio de serviços web. Projetado para ser usado principalmente por um Scanner de Código de Barras, mas suporta entradas manuais. Responsivo, permite usar a câmera do celular como scanner de código de barras ou áudio como entrada de texto. Os itens podem ser inseridos manualmente quando os WS não encontram um item. Além disso, gerencia uma fila de itens quando a conexão está instável.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/PointOfSale.html"
        },
        {
            "id": "4b486e5b-06a8-413f-4b3c-96d0a5c1b71f",
            "name": "User Tree",
            "nameEsp": "Árbol de Usuario",
            "namePor": "Árvore de Usuário",
            "text": "Tree view creation on runtime. Allows adding Folders or Files, removing items, and renaming. Support export and import on JSON format. This tree view uses the same script as the User Control.",
            "textEsp": "Creación de vista de árbol en tiempo de ejecución. Permite agregar Carpetas o Archivos, eliminar elementos y renombrar. Soporta exportación e importación en formato JSON. Esta vista de árbol utiliza el mismo script que el Control de Usuario.",
            "textPor": "Criação de visualização em árvore em tempo de execução. Permite adicionar Pastas ou Arquivos, remover itens e renomear. Suporta exportação e importação em formato JSON. Esta visualização em árvore usa o mesmo script do Controle de Usuário.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/TreeExplorer.html"
        },
        {
            "id": "3c597f6c-17b9-4240-5c2d-a7e1b6d2c820",
            "name": "Image Gallery",
            "nameEsp": "Galería de Imágenes",
            "namePor": "Galeria de Imagens",
            "text": "This User Control works together with an image gallery on a Free Style Grid. It allows zoom in/out, and the navigation is integrated with the Grid Paging, allowing to change the current page without close the exhibition mode. Allow some predefined actions and custom actions too.",
            "textEsp": "Este Control de Usuario funciona junto con una galería de imágenes en una Grilla de Estilo Libre. Permite acercar/alejar, y la navegación está integrada con la Paginación de Grilla, lo que permite cambiar la página actual sin cerrar el modo de exhibición. También permite algunas acciones predefinidas y acciones personalizadas.",
            "textPor": "Este Controle de Usuário funciona em conjunto com uma galeria de imagens em uma Grade de Estilo Livre. Permite zoom in/out, e a navegação é integrada com a Paginação de Grade, permitindo mudar a página atual sem fechar o modo de exibição. Também permite algumas ações predefinidas e ações personalizadas.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/ImageGallery.html"
        },
        {
            "id": "2d6a807d-28ca-4351-6d1e-b8f2c7e3d931",
            "name": "Manipulação gxgral.js",
            "nameEsp": "Manipulación gxgral.js",
            "namePor": "Manipulação gxgral.js",
            "text": "Sometimes due to small bugs or specific demands, some touch on the gxgral.js, provided by GeneXus is necessary. Some real examples are adjustment to trigger a Isvalid event when writing on a field with suggest before leaving the field ...",
            "textEsp": "A veces, debido a pequeños errores o demandas específicas, es necesario algún toque en el gxgral.js, proporcionado por GeneXus. Algunos ejemplos reales son el ajuste para activar un evento Isvalid al escribir en un campo con sugerencia antes de salir del campo...",
            "textPor": "Às vezes, devido a pequenos bugs ou demandas específicas, é necessário algum ajuste no gxgral.js, fornecido pelo GeneXus. Alguns exemplos reais são o ajuste para acionar um evento Isvalid ao escrever em um campo com sugestão antes de sair do campo...",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/ManipulaçãoGxgral_js.html"
        }
        ],
        "expanded": false
    },
    {
        "id": "ba7ec99f-a36c-4d4d-b2e0-973ca7751909",
        "name": "Genexus External Objects",
        "nameEsp": "Objetos Externos de Genexus",
        "namePor": "Objetos Externos Genexus",
        "type": "folder",
        "children": [
        {
            "id": "65950f99-85b8-451b-9628-e7f8a36eb3a5",
            "name": "SOAPmTLS",
            "nameEsp": "SOAPmTLS",
            "namePor": "SOAPmTLS",
            "type": "file",
            "text": "Supports communication with SOAP mutual TLS web services. KeyStore formats JKS and PKCS#12 are supported to secure the communication. Includes functionality to read and return WSDL information, consisting of method names and the parameters for each method.",
            "textEsp": "Soporta la comunicación con servicios web SOAP mutual TLS. Se admiten los formatos KeyStore JKS y PKCS#12 para asegurar la comunicación. Incluye funcionalidad para leer y devolver información WSDL, que consiste en nombres de métodos y los parámetros para cada método.",
            "textPor": "Suporta a comunicação com serviços web SOAP mutual TLS. Os formatos KeyStore JKS e PKCS#12 são suportados para proteger a comunicação. Inclui funcionalidade para ler e retornar informações WSDL, consistindo em nomes de métodos e os parâmetros para cada método.",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/SOAPmTLS.html",
            "links": [
            {
                "name": "Genexus Marketplace",
                "url": "https://marketplace.genexus.com/viewproduct.aspx?905"
            }
            ]
        },
        {
            "id": "ff617fe5-5bde-498d-a7a2-5f5530d729aa",
            "name": "XML Signature Utils",
            "nameEsp": "Utilidades de Firma XML",
            "namePor": "Utilitários de Assinatura XML",
            "text": "This Java utility class provides a comprehensive set of functions for handling digital certificates and performing cryptographic operations, primarily focusing on managing and utilizing keys stored in Java KeyStore formats, such as JKS and PKCS#12. It wraps Java's security APIs to simplify tasks related to trust, identity, and data integrity. Core Functionalities: Key and KeyStore Management, Digital Signatures and Verification, Encryption and Decryption",
            "textEsp": "Esta clase de utilidad Java proporciona un conjunto completo de funciones para manejar certificados digitales y realizar operaciones criptográficas, centrándose principalmente en la gestión y utilización de claves almacenadas en formatos Java KeyStore, como JKS y PKCS#12. Envuelve las APIs de seguridad de Java para simplificar tareas relacionadas con la confianza, la identidad y la integridad de los datos. Funcionalidades principales: Gestión de Claves y KeyStore, Firmas Digitales y Verificación, Cifrado y Descifrado.",
            "textPor": "Esta classe de utilitário Java fornece um conjunto abrangente de funções para manipulação de certificados digitais e execução de operações criptográficas, focando principalmente no gerenciamento e utilização de chaves armazenadas em formatos Java KeyStore, como JKS e PKCS#12. Ela encapsula as APIs de segurança do Java para simplificar tarefas relacionadas a confiança, identidade e integridade de dados. Funcionalidades Centrais: Gerenciamento de Chaves e KeyStore, Assinaturas Digitais e Verificação, Criptografia e Descriptografia.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/XMLSignatureUtils.html"
        },
        {
            "id": "91011d66-e763-4c9f-8d2a-c0e4f3a9e321",
            "name": "Certificate Utils",
            "nameEsp": "Utilidades de Certificado",
            "namePor": "Utilitários de Certificado",
            "text": "Set of functions for handling digital certificates (specifically X.509) and performing cryptographic operations, primarily focusing on managing keys stored in a KeyStore. Supports encrypt, decrypt, extract Public and Private Keys, load a certificate from X509 base 64 text and optimized listing certificates metadata for a specific alias or extraction for all certificates on KeyStore.",
            "textEsp": "Conjunto de funciones para manejar certificados digitales (específicamente X.509) y realizar operaciones criptográficas, centrándose principalmente en la gestión de claves almacenadas en un KeyStore. Admite cifrar, descifrar, extraer claves públicas y privadas, cargar un certificado desde texto X509 base 64 y un listado optimizado de metadatos de certificados para un alias específico o la extracción para todos los certificados en KeyStore.",
            "textPor": "Conjunto de funções para manipulação de certificados digitais (especificamente X.509) e execução de operações criptográficas, focando principalmente no gerenciamento de chaves armazenadas em um KeyStore. Suporta criptografar, descriptografar, extrair Chaves Públicas e Privadas, carregar um certificado a partir de texto X509 base 64 e listagem otimizada de metadados de certificados para um alias específico ou extração para todos os certificados no KeyStore.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/CertificateUtils.html"
        },
        {
            "id": "a2122e77-f874-4d0g-9e3b-d1f50b4a7432",
            "name": "Image Utils",
            "nameEsp": "Utilidades de Imagen",
            "namePor": "Utilitários de Imagem",
            "text": "Image Utils is dedicated to processing images, specifically for generating command strings compatible with ESC/POS thermal printers. The main function is to convert a standard image file (specified by imagePath) or a Base64-encoded string (b64String) into a series of hexadecimal commands that represent the rasterized, bitonal version of the image, ready for direct thermal printing. Additionally, it provides core image manipulation capabilities, such as resizeImage, which scales a loaded image to a new specified width while maintaining its aspect ratio",
            "textEsp": "Image Utils se dedica al procesamiento de imágenes, específicamente para generar cadenas de comandos compatibles con impresoras térmicas ESC/POS. La función principal es convertir un archivo de imagen estándar (especificado por imagePath) o una cadena codificada en Base64 (b64String) en una serie de comandos hexadecimales que representan la versión rasterizada y bitonal de la imagen, lista para la impresión térmica directa. Además, proporciona capacidades principales de manipulación de imágenes, como resizeImage, que escala una imagen cargada a un nuevo ancho especificado manteniendo su relación de aspecto.",
            "textPor": "Image Utils é dedicado ao processamento de imagens, especificamente para gerar strings de comando compatíveis com impressoras térmicas ESC/POS. A função principal é converter um arquivo de imagem padrão (especificado por imagePath) ou uma string codificada em Base64 (b64String) em uma série de comandos hexadecimais que representam a versão rasterizada e bitonal da imagem, pronta para impressão térmica direta. Além disso, fornece capacidades essenciais de manipulação de imagens, como resizeImage, que dimensiona uma imagem carregada para uma nova largura especificada, mantendo sua proporção.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/ImageUtils.html"
        },
        {
            "id": "b3233f88-0985-4e1h-a04c-e2g61c5b8543",
            "name": "PDF Print",
            "nameEsp": "Impresión PDF",
            "namePor": "Impressão PDF",
            "text": "Ideal for print on running a batch process, specify a target printer, and manage print job settings, including the number of copies, without requiring the user to interact with a print dialog. Ideal for print on running a batch process.",
            "textEsp": "Ideal para imprimir al ejecutar un proceso por lotes, especificar una impresora de destino y gestionar la configuración del trabajo de impresión, incluido el número de copias, sin requerir que el usuario interactúe con un diálogo de impresión. Ideal para imprimir al ejecutar un proceso por lotes.",
            "textPor": "Ideal para imprimir ao executar um processo em lote, especificar uma impressora de destino e gerenciar as configurações do trabalho de impressão, incluindo o número de cópias, sem exigir que o usuário interaja com uma caixa de diálogo de impressão. Ideal para imprimir ao executar um processo em lote.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/PDFPrint.html",
            "links": [
            {
                "name": "Genexus Marketplace",
                "url": "https://marketplace.genexus.com/viewproduct.aspx?904"
            }
            ]
        },
        {
            "id": "c4344099-1a96-4f2i-b15d-f3h72d6c9654",
            "name": "Machine Fingerprint",
            "nameEsp": "Huella Digital de Máquina",
            "namePor": "Impressão Digital da Máquina",
            "text": "Returns unique machine fingerprint by aggregating various low-level hardware and system identifiers. It collects data from multiple sources, including: Disk Identifiers, Network Interface MAC Addresses, Kernel Details, and CPU Information. This collected details can be used to determine a unique server identification when a process is running on instances of server farm.",
            "textEsp": "Devuelve la huella digital única de la máquina al agregar varios identificadores de hardware y sistema de bajo nivel. Recopila datos de múltiples fuentes, incluyendo: Identificadores de disco, Direcciones MAC de interfaz de red, Detalles del kernel e Información de la CPU. Estos detalles recopilados se pueden utilizar para determinar una identificación de servidor única cuando un proceso se está ejecutando en instancias de un conjunto de servidores.",
            "textPor": "Retorna a impressão digital única da máquina, agregando vários identificadores de hardware e sistema de baixo nível. Coleta dados de múltiplas fontes, incluindo: Identificadores de Disco, Endereços MAC de Interface de Rede, Detalhes do Kernel e Informações da CPU. Estes detalhes coletados podem ser usados para determinar uma identificação de servidor única quando um processo está sendo executado em instâncias de um farm de servidores.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/MachineFingerprint.html"
        },
        {
            "id": "d54551aa-2b07-403j-c26e-e2g61c5b8543",
            "name": "SOAP Static WSDL",
            "nameEsp": "WSDL Estático SOAP",
            "namePor": "WSDL Estático SOAP",
            "text": "This Java Servlet Filter intercepts incoming HTTP requests, specifically looking for the presence of the ?wsdl query string, which indicates a request for a Web Service Definition Language file. When a WSDL request is detected, the filter stops the normal servlet processing chain and instead serves a static WSDL file (e.g., ws_efactura_intercambio.wsdl) located in a predetermined path",
            "textEsp": "Este Filtro Servlet Java intercepta las solicitudes HTTP entrantes, buscando específicamente la presencia de la cadena de consulta ?wsdl, que indica una solicitud de un archivo de Lenguaje de Definición de Servicio Web. Cuando se detecta una solicitud WSDL, el filtro detiene la cadena de procesamiento normal del servlet y, en su lugar, sirve un archivo WSDL estático (por ejemplo, ws_efactura_intercambio.wsdl) ubicado en una ruta predeterminada.",
            "textPor": "Este Filtro Servlet Java intercepta as requisições HTTP de entrada, procurando especificamente pela presença da string de consulta ?wsdl, que indica uma solicitação de um arquivo de Linguagem de Definição de Serviço Web. Quando uma requisição WSDL é detectada, o filtro interrompe a cadeia normal de processamento do servlet e, em vez disso, serve um arquivo WSDL estático (por exemplo, ws_efactura_intercambio.wsdl) localizado em um caminho predeterminado.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/SOAPStaticWSDL.html"
        },
        {
            "id": "e65662bb-3c18-414k-d37f-15j94f8e1876",
            "name": "WS Security SOAP Handler",
            "nameEsp": "Manejador SOAP de Seguridad WS",
            "namePor": "Manipulador SOAP de Segurança WS",
            "text": "This Java External Object is a JAX-WS SOAP Handler that enforces WS-Security (Digital Signature) for SOAP Web Services in a GeneXus environment. For outbound calls, it digitally signs the SOAP Envelope using private key credentials retrieved from a Thread Local Storage mechanism. For inbound calls, it validates the XML Signature on the SOAP Envelope, ensuring message integrity and authenticity",
            "textEsp": "Este Objeto Externo Java es un Manejador SOAP JAX-WS que aplica WS-Security (Firma Digital) para Servicios Web SOAP en un entorno GeneXus. Para llamadas salientes, firma digitalmente el Sobre SOAP utilizando credenciales de clave privada recuperadas de un mecanismo de Almacenamiento Local de Hilos. Para llamadas entrantes, valida la Firma XML en el Sobre SOAP, asegurando la integridad y autenticidad del mensaje.",
            "textPor": "Este Objeto Externo Java é um Manipulador SOAP JAX-WS que aplica WS-Security (Assinatura Digital) para Serviços Web SOAP em um ambiente GeneXus. Para chamadas de saída, ele assina digitalmente o Envelope SOAP usando credenciais de chave privada recuperadas de um mecanismo de Armazenamento Local de Threads. Para chamadas de entrada, ele valida a Assinatura XML no Envelope SOAP, garantindo a integridade e autenticidade da mensagem.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/WSSecuritySOAPHandler.html"
        },
        {
            "id": "f76773cc-4d29-425l-e480-26ka5g9f2987",
            "name": "IP Address Match",
            "nameEsp": "Coincidencia de Dirección IP",
            "namePor": "Correspondência de Endereço IP",
            "text": "This Java utility class provides comprehensive validation for matching a target IP Address against a specified IP Mask or CIDR range (e.g., 192.168.1.0/24). Perform bitwise comparison, checking if the testIP falls within the subnet defined by the maskIP.",
            "textEsp": "Esta clase de utilidad Java proporciona una validación completa para hacer coincidir una Dirección IP de destino con una Máscara IP o rango CIDR especificado (por ejemplo, 192.168.1.0/24). Realiza una comparación bit a bit, comprobando si la IP de prueba se encuentra dentro de la subred definida por la maskIP.",
            "textPor": "Esta classe de utilitário Java fornece uma validação abrangente para fazer a correspondência de um Endereço IP de destino contra uma Máscara IP ou intervalo CIDR especificado (por exemplo, 192.168.1.0/24). Realiza uma comparação bit a bit, verificando se o testIP está dentro da sub-rede definida pelo maskIP.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/IPAddressMatch.html"
        },
        {
            "id": "087884dd-5e30-436m-f591-37lb6h0g3098",
            "name": "Shell Command",
            "nameEsp": "Comando Shell",
            "namePor": "Comando Shell",
            "text": "This Java utility class provides a static method to execute system commands on the host operating system. It performs automatic OS detection (Windows vs. others) and adapts command syntax, specifically for output redirection/tee functionality (>  vs. | tee).",
            "textEsp": "Esta clase de utilidad Java proporciona un método estático para ejecutar comandos del sistema en el sistema operativo host. Realiza la detección automática del sistema operativo (Windows frente a otros) y adapta la sintaxis del comando, específicamente para la funcionalidad de redirección/tee de salida (> frente a | tee).",
            "textPor": "Esta classe de utilitário Java fornece um método estático para executar comandos do sistema no sistema operacional host. Realiza a detecção automática do SO (Windows vs. outros) e adapta a sintaxe do comando, especificamente para a funcionalidade de redirecionamento/tee de saída (> vs. | tee).",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/ShellCommand.html"
        },
        {
            "id": "198995ee-6f41-447n-06a2-48mc7i1h4109",
            "name": "Thread Local Storage",
            "nameEsp": "Almacenamiento Local de Hilos",
            "namePor": "Armazenamento Local de Thread",
            "text": "Provide a solution for storing and retrieving process-specific data across a GeneXus server-side execution thread. It allows you to reliably store a String value that is strictly local to the current request or batch process, preventing concurrency issues and data collision in multi-threaded environments (like Java application servers).",
            "textEsp": "Proporciona una solución para almacenar y recuperar datos específicos del proceso a lo largo de un hilo de ejecución del lado del servidor de GeneXus. Permite almacenar de forma fiable un valor String que es estrictamente local a la solicitud actual o al proceso por lotes, evitando problemas de concurrencia y colisión de datos en entornos multi-hilo (como servidores de aplicaciones Java).",
            "textPor": "Fornece uma solução para armazenar e recuperar dados específicos do processo ao longo de um thread de execução do lado do servidor GeneXus. Ele permite armazenar de forma confiável um valor String que é estritamente local para a requisição atual ou processo em lote, prevenindo problemas de concorrência e colisão de dados em ambientes multi-thread (como servidores de aplicação Java).",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/ThreadLocalStorage.html"
        },
        {
            "id": "45c44ce2-0ea4-48bc-8e10-682d35231a48",
            "name": "Android",
            "nameEsp": "Android",
            "namePor": "Android",
            "type": "folder",
            "children": [
            {
                "id": "5652185a-7dc2-49fc-abb1-e86cc1662c63",
                "name": "Mobile XML Signature",
                "nameEsp": "Firma XML Móvil",
                "namePor": "Assinatura XML Mobile",
                "type": "file",
                "text": "Allows signing an XML on an Android device, using a local certificate. Doesn't need internet connection.",
                "textEsp": "Permite firmar un XML en un dispositivo Android, utilizando un certificado local. No necesita conexión a internet.",
                "textPor": "Permite assinar um XML em um dispositivo Android, usando um certificado local. Não precisa de conexão com a internet.",
                "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/MobileXMLSignature.html"
            },
            {
                "id": "7a6b7c8d-8e9f-4012-9012-0a1b2c3d4e5f",
                "name": "Bluetooth Print",
                "nameEsp": "Impresión Bluetooth",
                "namePor": "Impressão Bluetooth",
                "type": "file",
                "text": "Select a bluetooth device from a list. Send text or commands to the Bluetooth printer. On ESC/POS printers, supports printing images on a version rasterized and bitonal (series of hexadecimal commands supported by ESC/POS).",
                "textEsp": "Selecciona un dispositivo bluetooth de una lista. Envía texto o comandos a la impresora Bluetooth. En impresoras ESC/POS, admite la impresión de imágenes en una versión rasterizada y bitonal (serie de comandos hexadecimales compatibles con ESC/POS).",
                "textPor": "Seleciona um dispositivo bluetooth de uma lista. Envia texto ou comandos para a impressora Bluetooth. Em impressoras ESC/POS, suporta a impressão de imagens em uma versão rasterizada e bitonal (série de comandos hexadecimais suportados pelo ESC/POS).",
                "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/BluetoothPrint.html",
                "links": [
                {
                    "name": "Documentation",
                    "url": "https://sites.google.com/puntoexe.com.uy/pxtools-manual/external-objects/androidbluetoothprint"
                },
                {
                    "name": "Genexus Marketplace",
                    "url": "https://marketplace.genexus.com/viewproduct.aspx?696"
                }
                ]
            },
            {
                "id": "8b7c8d9e-9f0a-4123-a123-1b2c3d4e5f0a",
                "name": "Bluetooth Serial Receiver",
                "nameEsp": "Receptor Serial Bluetooth",
                "namePor": "Receptor Serial Bluetooth",
                "type": "file",
                "text": "Connects and receives data from a Bluetooth device, using the traditional serial communication.",
                "textEsp": "Conecta y recibe datos de un dispositivo Bluetooth, utilizando la comunicación serial tradicional.",
                "textPor": "Conecta e recebe dados de um dispositivo Bluetooth, usando a comunicação serial tradicional.",
                "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/BluetoothSerialReceiver.html",
                "links": [
                {
                    "name": "Documentation",
                    "url": "https://sites.google.com/puntoexe.com.uy/pxtools-manual/external-objects/android-bluetooth-serial-receiver"
                },
                {
                    "name": "Genexus Marketplace",
                    "url": "https://marketplace.genexus.com/viewproduct.aspx?832"
                }
                ]
            },
            {
                "id": "9c8d9eaf-a0b1-4234-b234-2c3d4e5f0a1b",
                "name": "Bluetooth Low Energy (BLE) Receiver",
                "nameEsp": "Receptor Bluetooth de Baja Energía (BLE)",
                "namePor": "Receptor Bluetooth de Baixa Energia (BLE)",
                "type": "file",
                "text": "Connects and receives data from a Bluetooth device, using the BLE (Bluetooth Low Energy) standard for communication.",
                "textEsp": "Conecta y recibe datos de un dispositivo Bluetooth, utilizando el estándar de comunicación BLE (Bluetooth Low Energy).",
                "textPor": "Conecta e recebe dados de um dispositivo Bluetooth, usando o padrão de comunicação BLE (Bluetooth Low Energy).",
                "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/BLEReceiver.html"
            }
            ],
            "expanded": false
        }
        ],
        "expanded": false
    },
    {
        "id": "11d4281c-02dd-4d2e-8694-188ea30bb1cb",
        "name": "Genexus Modules",
        "nameEsp": "Módulos Genexus",
        "namePor": "Módulos Genexus",
        "type": "folder",
        "children": [
        {
            "id": "09625d96-5195-456e-9d9c-8880c6c39d9c",
            "name": "Cloud Tasks",
            "nameEsp": "Tareas en la Nube",
            "namePor": "Tarefas na Nuvem",
            "type": "file",
            "text": "Module to handle cloud-based task management and scheduling. Certificates and key stores management complete and autonomos, including install, data extract, depuration by expiration data, supporting pkcs12 and jks formats.",
            "textEsp": "Módulo para manejar la gestión y programación de tareas en la nube. Gestión completa y autónoma de certificados y almacenes de claves, incluyendo instalación, extracción de datos, depuración por fecha de expiración, soportando formatos pkcs12 y jks.",
            "textPor": "Módulo para gerenciar o gerenciamento e agendamento de tarefas baseadas na nuvem. Gestão completa e autônoma de certificados e armazenamentos de chaves, incluindo instalação, extração de dados, depuração por data de expiração, suportando os formatos pkcs12 e jks.",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/CloudTasks.html"
        },
        {
            "id": "2ed2ddd6-34b8-4bd3-94e6-14d9b99b734c",
            "name": "Printer Markup Language",
            "nameEsp": "Lenguaje de Marcado de Impresora",
            "namePor": "Linguagem de Marcação da Impressora",
            "text": "Printer Markup Language is a declared language to define a standard for ticket declaration for portable printers. Communication with various printer models is not standardized. Additionally, it is generally necessary to send escape commands and other special characters. Its objective is to make communication standardized and intuitive.",
            "textEsp": "Printer Markup Language es un lenguaje declarado para definir un estándar para la declaración de tickets para impresoras portátiles. La comunicación con varios modelos de impresoras no está estandarizada. Además, generalmente es necesario enviar comandos de escape y otros caracteres especiales. Su objetivo es estandarizar e hacer intuitiva la comunicación.",
            "textPor": "Printer Markup Language é uma linguagem declarada para definir um padrão para a declaração de tickets para impressoras portáteis. A comunicação com vários modelos de impressoras não é padronizada. Além disso, geralmente é necessário enviar comandos de escape e outros caracteres especiais. Seu objetivo é tornar a comunicação padronizada e intuitiva.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/PrinterMarkupLanguage.html",
            "links": [
            {
                "name": "Documentation",
                "url": "https://sites.google.com/puntoexe.com.uy/pxtools-manual/modulos-sd/printer-markup-language"
            }
            ]
        },
        {
            "id": "3f4e5d6c-7e8f-490a-8b9c-5d6e7f8a9b0c",
            "name": "OAuth Consumer",
            "nameEsp": "Consumidor OAuth",
            "namePor": "Consumidor OAuth",
            "text": "A high-level layer that facilitates connection with OAuth authentication providers. It includes callbacks, APIs for authorization, token requests, and revocation. It allows customization to cover a broad range of providers.",
            "textEsp": "Una capa de alto nivel que facilita la conexión con proveedores de autenticación OAuth. Incluye callbacks, APIs para autorización, solicitudes de token y revocación. Permite la personalización para cubrir una amplia gama de proveedores.",
            "textPor": "Uma camada de alto nível que facilita a conexão com provedores de autenticação OAuth. Inclui callbacks, APIs para autorização, solicitações de token e revogação. Permite a customização para cobrir uma ampla gama de provedores.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/OAuthConsumer.html"
        },
        {
            "id": "4e5d6c7b-8f90-4a1b-9c0d-6e7f8a9b0c1d",
            "name": "OAuth Service",
            "nameEsp": "Servicio OAuth",
            "namePor": "Serviço OAuth",
            "text": "Facilitates the ability for a system to act as an OAuth provider. It has configurable authentication and token policies. It allows silent authentication without the need for user interfaces.",
            "textEsp": "Facilita la capacidad de un sistema para actuar como proveedor OAuth. Cuenta con políticas de autenticación y token configurables. Permite la autenticación silenciosa sin necesidad de interfaces de usuario.",
            "textPor": "Facilita a capacidade de um sistema atuar como um provedor OAuth. Possui políticas de autenticação e token configuráveis. Permite a autenticação silenciosa sem a necessidade de interfaces de usuário.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/OAuthService.html"
        },
        {
            "id": "5d6c7b8a-90a1-4b2c-a0d1-7f8a9b0c1d2e",
            "name": "Conector DGI",
            "nameEsp": "Conector DGI",
            "namePor": "Conector DGI",
            "text": "Electronic invoice intermediation system for Uruguay. Supports integration with customer service systems. Allows issuing the document either by the system itself or externally. Supports printing on A4 or ticket printers. Application and certification in very little time thanks to the levels of automation implemented. Commercialized both as SAAS and as a sale of the GeneXus Knowledge Base (KB).",
            "textEsp": "Sistema de intermediación de factura electrónica para Uruguay. Soporta la integración con sistemas de atención al cliente. Permite emitir el documento ya sea por el propio sistema o externamente. Soporta impresión en impresoras A4 o de tickets. Aplicación y certificación en muy poco tiempo gracias a los niveles de automatización implementados. Comercializado tanto como SAAS como venta de la Base de Conocimiento (KB) de GeneXus.",
            "textPor": "Sistema de intermediação de fatura eletrônica para o Uruguai. Suporta integração com sistemas de atendimento ao cliente. Permite emitir o documento tanto pelo próprio sistema quanto externamente. Suporta impressão em impressoras A4 ou de tickets. Aplicação e certificação em muito pouco tempo graças aos níveis de automação implementados. Comercializado tanto como SAAS quanto como venda da Base de Conhecimento (KB) GeneXus.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/ConectorDGI.html",
            "links": [
            {
                "name": "Documentation",
                "url": "https://sites.google.com/a/puntoexe.com.uy/conectordgi"
            }
            ]
        },
        {
            "id": "6c7b8a90-a1b2-4c3d-b1e2-8a9b0c1d2e3f",
            "name": "Intercambio Emisores DGI",
            "nameEsp": "Intercambio Emisores DGI",
            "namePor": "Intercâmbio de Emissores DGI",
            "text": "SDK for Document Exchange between issuers (emisores) of D.G.I. with support for SOAP communication based on WS-Security and the use of digital certificates",
            "textEsp": "SDK para Intercambio de Documentos entre emisores de D.G.I. con soporte para comunicación SOAP basada en WS-Security y el uso de certificados digitales.",
            "textPor": "SDK para Troca de Documentos entre emissores (emisores) da D.G.I. com suporte para comunicação SOAP baseada em WS-Security e o uso de certificados digitais.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/IntercambioEmisoresDGI.html",
            "links": [
            {
                "name": "Documentation",
                "url": "https://sites.google.com/puntoexe.com.uy/intercambioentreemisoresuy"
            }
            ]
        },
        {
            "id": "7b8a90c1-b2c3-4d4e-c2f3-9b0c1d2e3f4a",
            "name": "WhatsApp Business API",
            "nameEsp": "API de Negocios de WhatsApp",
            "namePor": "API de Negócios do WhatsApp",
            "type": "file",
            "text": "",
            "textEsp": "",
            "textPor": "",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/WhatsAppBusinessAPI.html"
        }
        ],
        "expanded": false
    },
    {
        "id": "6e8d5417-b01c-434e-89f0-d7b9873ee077",
        "name": "Projects",
        "nameEsp": "Proyectos",
        "namePor": "Projetos",
        "type": "folder",
        "children": [
        {
            "id": "e65734fe-14b7-4987-9267-9f5c4c1e1bc4",
            "name": "IRR Calculator",
            "nameEsp": "Calculadora TIR",
            "namePor": "Calculadora TIR",
            "text": "Set of algorithms related to the core of financial system. To calculate the Internal Rate of Return (IRR), find the discount rate that makes the Net Present Value (NPV) of a series of cash flows equal to zero. This is typically done using a financial calculator or spreadsheet software, which uses an iterative process to find the rate, since it's often not solvable through simple algebra (on my case, I use iterative process).Developed for a fintech company in Porto Alegre, Brazil.",
            "textEsp": "Conjunto de algoritmos relacionados con el núcleo del sistema financiero. Para calcular la Tasa Interna de Retorno (TIR), se busca la tasa de descuento que hace que el Valor Actual Neto (VAN) de una serie de flujos de caja sea igual a cero. Esto se hace típicamente usando una calculadora financiera o software de hoja de cálculo, que utiliza un proceso iterativo para encontrar la tasa, ya que a menudo no es resoluble mediante álgebra simple (en mi caso, utilizo un proceso iterativo). Desarrollado para una empresa fintech en Porto Alegre, Brasil.",
            "textPor": "Conjunto de algoritmos relacionados ao núcleo do sistema financeiro. Para calcular a Taxa Interna de Retorno (TIR), encontra-se a taxa de desconto que torna o Valor Presente Líquido (VPL) de uma série de fluxos de caixa igual a zero. Isso é tipicamente feito usando uma calculadora financeira ou software de planilha, que utiliza um processo iterativo para encontrar a taxa, já que muitas vezes não é solúvel por álgebra simples (no meu caso, eu uso um processo iterativo). Desenvolvido para uma empresa fintech em Porto Alegre, Brasil.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/IRRCalculator.html",
            "links": [
            {
                "name": "Concept on Wikipedia",
                "url": "https://en.wikipedia.org/wiki/Internal_rate_of_return"
            },
            {
                "name": "Demo",
                "url": "http://dev.puntoexe.com.uy/WmsLabsJavaEnvironment/com.wmslabs.labswms.irrcalculator"
            }
            ]
        },
        {
            "id": "2f099dfb-3143-4d7c-9d2b-f62cb20dd748",
            "name": "OAV Dynamic Tables",
            "nameEsp": "Tablas Dinámicas OAV",
            "namePor": "Tabelas Dinâmicas OAV",
            "text": "Allows configuring fields in a two-dimensional way at runtime, by columns and rows, forming a table. It also has the interface for editing such configured data.",
            "textEsp": "Permite configurar campos de forma bidimensional en tiempo de ejecución, por columnas y filas, formando una tabla. También cuenta con la interfaz para la edición de dichos datos configurados.",
            "textPor": "Permite configurar campos de forma bidimensional em tempo de execução, por colunas e linhas, formando uma tabela. Também possui a interface para a edição desses dados configurados.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/OAVDynamicTables.html"
        },
        {
            "id": "3a4b5c6d-7e8f-490a-8b9c-5d6e7f8a9b0c",
            "name": "Evaluation Date Formulas",
            "nameEsp": "Fórmulas de Evaluación de Fecha",
            "namePor": "Fórmulas de Avaliação de Data",
            "text": "Allows evaluation of string formulas supporting date and datetime types. Creation of functions like 'addDay', 'EndOfMonth', 'DateDif'... The system used the 'Expression' data type, native to GeneXus, which evaluates mathematical operations but has limitations regarding date and datetime. Developed for an ERP specialized in the pharmaceutical industry located in the USA.",
            "textEsp": "Permite la evaluación de fórmulas de cadena que admiten tipos de fecha y fecha/hora. Creación de funciones como 'addDay', 'EndOfMonth', 'DateDif'... El sistema utilizó el tipo de dato 'Expression', nativo de GeneXus, que evalúa operaciones matemáticas pero tiene limitaciones con respecto a fecha y fecha/hora. Desarrollado para un ERP especializado en la industria farmacéutica ubicado en EE. UU.",
            "textPor": "Permite a avaliação de fórmulas de string suportando tipos de data e data/hora. Criação de funções como 'addDay', 'EndOfMonth', 'DateDif'... O sistema utilizou o tipo de dado 'Expression', nativo do GeneXus, que avalia operações matemáticas mas tem limitações quanto a data e data/hora. Desenvolvido para um ERP especializado na indústria farmacêutica localizado nos EUA.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/EvaluationDateFormulas.html"
        },
        {
            "id": "4b5c6d7e-8f90-4a1b-9c0d-6e7f8a9b0c1d",
            "name": "Synchronize Kb by hash",
            "nameEsp": "Sincronización de KB por hash",
            "namePor": "Sincronizar KB por hash",
            "text": "Developed for a client in Chile, who has parts of operations in remote locations with connectivity problems. Created a very fast data synchronization mechanism based on hash comparisons (general and per table).",
            "textEsp": "Desarrollado para un cliente en Chile, que tiene partes de operaciones en ubicaciones remotas con problemas de conectividad. Creó un mecanismo de sincronización de datos muy rápido basado en comparaciones de hash (general y por tabla).",
            "textPor": "Desenvolvido para um cliente no Chile, que tem partes das operações em locais remotos com problemas de conectividade. Criou um mecanismo de sincronização de dados muito rápido baseado em comparações de hash (geral e por tabela).",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/SynchronizeDataBbyHash.html"
        },
        {
            "id": "5c6d7e8f-90a1-4b2c-a0d1-7f8a9b0c1d2e",
            "name": "Printer IT",
            "nameEsp": "Impresora IT",
            "namePor": "Impressora IT",
            "text": "Remote printing system for Bluetooth printers via web services and silent notifications. It allows any type of Win, Web, or Mobile application (connected to the internet) to request printing on a thermal ticket printer from any mobile device that has a Bluetooth printer attached.",
            "textEsp": "Sistema de impresión remota para impresoras Bluetooth a través de servicios web y notificaciones silenciosas. Permite que cualquier tipo de aplicación Win, Web o Móvil (conectada a internet) solicite la impresión en una impresora térmica de tickets desde cualquier dispositivo móvil que tenga una impresora Bluetooth conectada.",
            "textPor": "Sistema de impressão remota para impressoras Bluetooth via serviços web e notificações silenciosas. Permite que qualquer tipo de aplicação Win, Web ou Mobile (conectada à internet) solicite a impressão em uma impressora térmica de tickets a partir de qualquer dispositivo móvel que tenha uma impressora Bluetooth conectada.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/PrinterIT.html",
            "links": [
            {
                "name": "Documentation",
                "url": "https://printerit.puntoexe.com.uy/"
            }
            ]
        },
        {
            "id": "6d7e8f90-a1b2-4c3d-b1e2-8a9b0c1d2e3f",
            "name": "WMS Office",
            "nameEsp": "Oficina WMS",
            "namePor": "Escritório WMS",
            "text": "Complete solution for management and optimization of storage in a logistics center with a capacity of 6300 pallets, located in state of São Paulo, Brazil.",
            "textEsp": "Solución completa para la gestión y optimización del almacenamiento en un centro logístico con capacidad para 6300 paletas, ubicado en el estado de São Paulo, Brasil.",
            "textPor": "Solução completa para gestão e otimização de armazenamento em um centro logístico com capacidade para 6300 paletes, localizado no estado de São Paulo, Brasil.",
            "type": "file",
            "url": "https://marcelogiazzon.github.io/host01/portfolio/frames/WMSOffice.html"
        }
        ],
        "expanded": false
    }
    ],
    "expanded": true
}
];

// Element references defined globally for use in handlers
let contentFrame;
let body;
let portfolioContainer; 
let mobileToggle;
let mobileOverlay;
let mobileIframe;
let mobileTitle;

// NEW GLOBAL STATE FOR NAVIGATION
let allFiles = []; // Flat list of all file objects
let currentFileIndex = -1; // Index of the currently open file

// Desktop/Inline navigation buttons
let prevFileButton;
let nextFileButton;
// Mobile/Popup navigation buttons
let mobilePrevFileButton;
let mobileNextFileButton;

// Function to recursively flatten the tree and collect all file nodes
function collectFiles(node, list) {
    if (node.type === 'file') {
        list.push(node);
    }
    if (node.children) {
        node.children.forEach(child => collectFiles(child, list));
    }
}

// Function to get the flat list of files
function getFileList() {
    const list = [];
    portfolioData.forEach(rootNode => collectFiles(rootNode, list));
    return list;
}

function createTreeNode(item, level = 0) {
    if (item.name === 'Root') {
        const rootDiv = document.createElement('div');
        if (item.children) {
            item.children.forEach(child => {
                rootDiv.appendChild(createTreeNode(child, level));
            });
        }
        return rootDiv;
    }
    
    const li = document.createElement('li');
    li.className = item.type === 'folder' ? 'tree-item tree-folder' : 'tree-item tree-file';
    
    // Store the file ID on the LI element for quick navigation lookups
    if (item.type === 'file') {
        li.dataset.fileId = item.id;
    }
    
    const label = document.createElement('div');
    label.className = 'tree-label';
    
    if (item.type === 'folder') {
        const toggle = document.createElement('span');
        toggle.className = 'tree-toggle';
        toggle.textContent = item.expanded ? '−' : '+';
        label.appendChild(toggle);
    } else {
        const spacer = document.createElement('span');
        spacer.className = 'tree-toggle';
        spacer.style.visibility = 'hidden';
        label.appendChild(spacer);
        
        label.addEventListener('click', function() {
            // Clear previous selection and set current one
            document.querySelectorAll('.tree-file').forEach(f => f.classList.remove('selected'));
            li.classList.add('selected');
            openFile(item);
        });
    }
    
    const icon = document.createElement('span');
    icon.className = 'tree-icon';
    if (item.type === 'folder') {
        icon.textContent = item.expanded ? '📂' : '📁';
    } else {
        icon.textContent = '📄';
    }
    
    const name = document.createElement('span');
    name.textContent = item.name;
    
    label.appendChild(icon);
    label.appendChild(name);
    li.appendChild(label);
    
    if (item.children && item.children.length > 0) {
        const ul = document.createElement('ul');
        ul.className = item.expanded ? 'tree-children expanded' : 'tree-children';
        
        item.children.forEach(child => {
            ul.appendChild(createTreeNode(child, level + 1));
        });
        
        li.appendChild(ul);
        
        label.addEventListener('click', function() {
            ul.classList.toggle('expanded');
            const toggle = label.querySelector('.tree-toggle');
            const icon = label.querySelector('.tree-icon');
            if (ul.classList.contains('expanded')) {
                toggle.textContent = '−';
                icon.textContent = '📂';
            } else {
                toggle.textContent = '+';
                icon.textContent = '📁';
            }
        });
    }
    
    return li;
}

// Helper function to calculate the absolute position of any element
function calculateAbsoluteTop(element) {
    const rect = element.getBoundingClientRect();
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    return rect.top + currentScroll; 
}

function handleScroll() {
    // Check if mobile simulation is active. If so, disable the sticky frame behavior.
    if (mobileToggle && mobileToggle.checked) {
        if (contentFrame) contentFrame.style.paddingTop = '0px';
        return;
    }
    
    // Ensure elements are available
    if (!contentFrame || !body || !portfolioContainer) return;

    // 1. DYNAMIC CALCULATION: Calculate the trigger position on every scroll
    const triggerPosition = calculateAbsoluteTop(portfolioContainer);

    // 2. Get current scroll position
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    // Calculate the distance scrolled past the trigger point
    let difference = currentScrollPosition - triggerPosition;

    if (difference > 0) {

        const portfolioTreeElem = document.getElementById('portfolioTree');
        const contentFrameElem = document.getElementById('contentFrame');

        const auxPortfolioTreeHeight = portfolioTreeElem.clientHeight;
        const auxFrameHeight = contentFrameElem.scrollHeight;

        const auxStyle = window.getComputedStyle(contentFrameElem);
        const auxPaddingTop = parseFloat(auxStyle.paddingTop);

        console.log('auxPortfolioTreeHeight: ' + auxPortfolioTreeHeight
        + ' auxFrameHeight: ' + auxFrameHeight +
        ' auxPaddingTop: ' + auxPaddingTop);

        let difTreeAndFrame = auxPortfolioTreeHeight - (auxFrameHeight - auxPaddingTop + difference);

        if (difTreeAndFrame < 0) {
            difference = difference - (difTreeAndFrame *-1);
        }

        console.log('difference: ' + difference + ' difTreeAndFrame: ' + difTreeAndFrame);

        // Apply padding-top equal to the difference
        contentFrame.style.paddingTop = `${difference.toFixed(0)}px`;
        
    } else {
        // Remove padding when scrolled back up
        contentFrame.style.paddingTop = '0px'; 
    }
}

function closeMobileModal() {
    if (mobileOverlay) {
        mobileOverlay.classList.remove('active');
        mobileIframe.src = ''; // Clear content
        document.body.style.overflow = ''; // Re-enable body scroll
    }
}

// Function to update the navigation button state (disabled or enabled)
function updateNavigationButtons() {
    const isFirst = (currentFileIndex <= 0);
    const isLast = (currentFileIndex >= allFiles.length - 1);
    
    // Update Desktop/Inline buttons
    if (prevFileButton && nextFileButton) {
        prevFileButton.disabled = isFirst;
        nextFileButton.disabled = isLast;
    }

    // Update Mobile/Popup buttons
    if (mobilePrevFileButton && mobileNextFileButton) {
        mobilePrevFileButton.disabled = isFirst;
        mobileNextFileButton.disabled = isLast;
    }
}

// Function to handle moving to the next or previous file
function navigate(direction) {
    let newIndex = currentFileIndex + direction;
    
    if (newIndex >= 0 && newIndex < allFiles.length) {
        const nextItem = allFiles[newIndex];
        
        // Find the corresponding tree element based on the data-file-id
        const nextLi = document.querySelector(`.tree-file[data-file-id="${nextItem.id}"]`);
        
        if (nextLi) {
            // Visually update selection in the tree
            document.querySelectorAll('.tree-file').forEach(f => f.classList.remove('selected'));
            nextLi.classList.add('selected');
            
            // Open the file (this will automatically update currentFileIndex and buttons)
            openFile(nextItem);
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // Initialize element references
    contentFrame = document.getElementById('contentFrame');
    body = document.body;
    portfolioContainer = document.querySelector('.portfolio-container'); 
    mobileToggle = document.getElementById('mobileSimulationToggle');
    mobileOverlay = document.getElementById('mobileSimulationOverlay');
    mobileIframe = document.getElementById('mobileSimulationIframe');
    mobileTitle = document.getElementById('mobileSimulationTitle');
    const mobileCloseButton = document.getElementById('mobileSimulationClose');

    // Initialize NEW navigation element references
    prevFileButton = document.getElementById('prevFileButton');
    nextFileButton = document.getElementById('nextFileButton');
    mobilePrevFileButton = document.getElementById('mobilePrevFileButton');
    mobileNextFileButton = document.getElementById('mobileNextFileButton');


    // 1. Generate flat file list for navigation
    allFiles = getFileList();

    // 2. Attach navigation handlers
    if (prevFileButton) prevFileButton.addEventListener('click', () => navigate(-1));
    if (nextFileButton) nextFileButton.addEventListener('click', () => navigate(1));
    if (mobilePrevFileButton) mobilePrevFileButton.addEventListener('click', () => navigate(-1));
    if (mobileNextFileButton) mobileNextFileButton.addEventListener('click', () => navigate(1));
    
    const treeContainer = document.getElementById('portfolioTree');
    portfolioData.forEach(item => {
        treeContainer.appendChild(createTreeNode(item));
    });

    // Attach the scroll handler to the window scroll event
    window.addEventListener('scroll', handleScroll);
    
    // Attach close handler
    if (mobileCloseButton) {
        mobileCloseButton.addEventListener('click', closeMobileModal);
    }
    // Optional: Close modal on outside click (overlay click)
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', (e) => {
            // Check if the click target is the overlay itself (not the window inside)
            if (e.target === mobileOverlay) {
                closeMobileModal();
            }
        });
    }

    // Run once on load to set the initial state
    handleScroll();
    updateNavigationButtons(); // Initialize buttons to disabled state (since currentFileIndex is -1)
});

function openFile(item) {
    // Update global state for navigation
    currentFileIndex = allFiles.findIndex(file => file.id === item.id);
    updateNavigationButtons(); // Update buttons immediately after index change

    if (! currentLang)
            currentLang = 'en';
    
    // First, ensure the body scroll is re-enabled if needed (in case mobile toggle was just unchecked)
    document.body.style.overflow = ''; 

    if (mobileToggle.checked) {
        // Mobile Simulation Mode (Popup)
        mobileTitle.textContent = item.name;
        mobileIframe.src = item.url + '?lang=' + currentLang;
        mobileOverlay.classList.add('active');
        
        // Disable body scrolling when modal is open
        document.body.style.overflow = 'hidden';
        
        // Also ensure the inline frame is hidden
        document.getElementById('contentFrame').classList.remove('active');
        
    } else {
        // Default Inline Frame Mode
        const frameContainer = document.getElementById('contentFrame');
        const iframe = document.getElementById('contentIframe');
        const frameTitle = document.getElementById('frameTitle');
        
        // 1. Make the frame visible first
        frameContainer.classList.add('active'); 
        
        // 2. Update the title
        frameTitle.textContent = `${item.name}`;
        
        // 3. Set the source
        iframe.src = item.url + '?lang=' + currentLang;
        
        // 4. Ensure the mobile modal is closed if it was accidentally open
        mobileOverlay.classList.remove('active');
    }
}

function closeFrame() {
    const frameContainer = document.getElementById('contentFrame');
    const iframe = document.getElementById('contentIframe');
    
    frameContainer.classList.remove('active');
    iframe.src = '';
    
    document.querySelectorAll('.tree-file').forEach(f => f.classList.remove('selected'));
}