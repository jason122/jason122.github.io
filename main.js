$(function () {
    
    var prompt = 'A:/Home/>';
    var jqconsole = $('#console').jqconsole('', prompt);
    jqconsole.Write('Political PowerShell\nCopyright (C) 7777 Liberation LLC. All rights legitimized.\n','jqconsole-output');
    
    var noise = 100;
    
        
    var widgetIframe = document.getElementById('sc-widget'),
    widget       = SC.Widget(widgetIframe);
        
    var startPrompt = function () {
        widget.setVolume(noise);
        // Start the prompt with history enabled.
        jqconsole.Prompt(true, function (input) {
        // Output input with the class jqconsole-output.
        if (input == 'Hello') {
            jqconsole.Write("Hi!\n", 'jqconsole-output');
        }
        else if (input == 'get-content .') {
            jqconsole.Write("rwx---r--        net-neutrality.txt\n", 'jqconsole-output')
        }
        else if (input == 'get-content net-neutrality.txt') {
            jqconsole.Write("Your government has stripped from you the right \nto freely access information and data.\n They have restricted your cyberspace to the most\n mind-numbing depths of the propoganda machine.\nThey have forced you to pay for basic human rights like knowledge\n and worthwhile education, and finally, they've stolen your rights to privacy and sold\n your data to the rich ISPs and large corporations.\n It's time you strike back. If you _really_ want to make\n a difference, you know what to do. Get to reading.\n", 'jqconsole-output');
        }
        else if (input == 'help' | input == '?') {
            jqconsole.Write("get-content         gets the content of a file, use '.' to \n                    request the content of the current directory.\nHello               says hello to the computer.\nhelp                displays this page.\nscp                 toggle music\nloud (or louder)    increases volume\nquiet (or quieter)  decreases volume\n", 'jqconsole-output')
        }
        else if (input == '') {
        }
        else if (input == 'scp') {
            widget.toggle();
        }
        else if (input == 'quiet') {
            noise -=10;
            widget.setVolume(noise);
        }
        else if (input == 'quieter') {
            noise-=20;
            widget.setVolume(noise);
        }
        else if (input == 'loud') {
            noise += 10;
            widget.setVolume(noise);
        }
        else if (input == 'louder') {
            noise += 20;
            widget.setVolume(noise);
        }
        else if (input == 'get-content') {
            jqconsole.Write("Error: No file specified.", 'jqconsole-output')
        }
        else {
            jqconsole.Write("Command '" + input + "' not understood.\n", 'jqconsole-output');
        }
        // Restart the prompt.
        startPrompt();
        });
    };
    startPrompt();
});