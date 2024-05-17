document.addEventListener('DOMContentLoaded', function() {
    const translateButton = document.getElementById('translateButton');
    const inputText = document.getElementById('inputText');
    const language = document.getElementById('language');
    var APIkey = localStorage.getItem('cleAPI');

    translateButton.addEventListener('click', function() {
        const textToTranslate = inputText.value;
        const languageToTranslate = language.value;

        fetch(`https://api-free.deepl.com/v2/translate?auth_key=${encodeURIComponent(APIkey)}&text=${encodeURIComponent(textToTranslate)}&target_lang=${encodeURIComponent(languageToTranslate)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la traduction. Vérifiez votre texte et réessayez.');
                }
                return response.json();
            })
            .then(data => {
                if (data && data.translations && data.translations.length > 0) {
                    const translatedText = data.translations[0].text;
                    inputText.value = translatedText;
                } else {
                    inputText.value = "Erreur lors de la traduction.";
                }
            })
            .catch(error => {
                translationResult.textContent = error.message;
                console.error('Error:', error);
            });
    });
});
