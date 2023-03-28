const launchChat = (number) => {
    let url = "https://web.whatsapp.com/send/?phone=" + number;
    chrome.tabs.query({url: "*://web.whatsapp.com/*"}, (tabs) => {
        let tab = null;
        tab = tabs[0];
        if (!tab) {
            chrome.tabs.create({active: true, url});
        } else {
            chrome.tabs.update(tab.id, {active: true, url});
        };
    });
};

const formatNumber = (number) => {
    return number.replace(/[\+\(\)\-\.\,\s]/g, '');
};

const redirectWhatsapp = () => {
    let number = document.querySelector('#phone');
    number = formatNumber(number.value);
    launchChat(number);
 };

const setPreferredTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {        
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    };
};

setPreferredTheme();
