
    	/*Audio input Start Here*/
        /*var final_transcript = '';
        var recognizing = false;
        var ignore_onend;
        var start_timestamp;*/
        /*Audio input End Here*/

            //{
			/*Audio input Start Here*/
			
			if (logActive)
				console.log('Audio input Start Here!!!');

			var elemMicro = document.getElementById('TBICONSEARCHAUDIO');
			if (elemMicro != undefined && elemMicro != null)
			{
				if (!('webkitSpeechRecognition' in window)) {
            console.log('info_ webkitSpeechRecognition not available');
        } else {

					elemMicro.onclick = function () {
						//clickElem(this,elemClick,elemSuport,elemPosition);

						console.log('info_ startButton');
						if (recognizing) {
								recognition.stop();
								return;
						}
						final_transcript = '';
						recognition.lang = 'es-UY';
						recognition.start();
						ignore_onend = false;
						console.log('info_allow');


					};

						console.log('info_ webkitSpeechRecognition available!!!');
            var recognition = new webkitSpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;

            recognition.onstart = function() {
                recognizing = true;
                console.log('info_speak_now');
            };

            recognition.onerror = function(event) {
                if (event.error == 'no-speech') {
                	console.log('info_no_speech');
                	ignore_onend = true;
                }
                if (event.error == 'audio-capture') {
                	console.log('info_no_microphone');
                	ignore_onend = true;
                }
                if (event.error == 'not-allowed') {
	                if (event.timeStamp - start_timestamp < 100) {
	                    console.log('info_blocked');
	                } else {
	                    console.log('info_denied');
	                }
                	ignore_onend = true;
                }
            };

            recognition.onend = function() {
                recognizing = false;
                if (ignore_onend) {
                    return;
                }
                if (!final_transcript) {
                    console.log('info_start');
                return;
                }
                console.log('on end');
            };

            recognition.onresult = function(event) {
                var interim_transcript = '';
                for (var i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        final_transcript += event.results[i][0].transcript;
                    } else {
                        interim_transcript += event.results[i][0].transcript;
                    }
                }
                //final_transcript = final_transcript;

								console.log('info_ onresult. final_transcript = ' + final_transcript);
								console.log('info_ onresult. interim_transcript = ' + interim_transcript);

								var elemResult = document.getElementById('TBRESULT');

								if (elemResult != null && elemResult != undefined && (interim_transcript.length > 0 || final_transcript.length > 0))
								{
									elemResult.innerHTML = elemResult.innerHTML + '<br>' + interim_transcript + ' | '  + final_transcript;
								}


								//final_span.innerHTML = linebreak(final_transcript);
                //interim_span.innerHTML = linebreak(interim_transcript);
                //if (final_transcript || interim_transcript) {
                //  showButtons('inline-block');
                //}
            };
        }

				function startButton(event) {
						console.log('info_ startButton');
            if (recognizing) {
                recognition.stop();
                return;
            }
            final_transcript = '';
            recognition.lang = 'es-UY';
            recognition.start();
            ignore_onend = false;
            console.log('info_allow');
            start_timestamp = event.timeStamp;
        }
			}
			/*Audio input Ends Here*/
		//}