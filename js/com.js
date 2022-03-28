class forComponent {
    static scrName = '<script>';
    static scrEndName = '</script>';

    static startCovertComponent(){
        const components = document.querySelectorAll('component');
        components.forEach((component, index) => {
            const src = component.getAttribute('src');
            this.getComponent(src, (res) => {
                this.addScript(res, (HTML) => {
                    component.outerHTML = `<!---- THS COMPONENT URL ${src} -->${HTML}`;
                });
            })
            if(components.length > 0 && index === components.length - 1){
                this.startCovertComponent();
                this.startConvertFor();
            }
        })
    }

    static addScript(res, calBack){
        if(res.includes(this.scrName)){
            const startIndexOfScript = res.indexOf(this.scrName);
            const endScript = res.indexOf(this.scrEndName);
            const cropString = res.slice(startIndexOfScript + this.scrName.length, endScript);

            const newScript = document.createElement('script');
            newScript.setAttribute('defer', 'true');
            newScript.innerHTML = cropString;
            document.body.appendChild(newScript);

            calBack(res.slice(0, startIndexOfScript));
        } else {
            calBack(res);
        }
    }

    static startConvertFor(){
        const forTag = document.querySelectorAll('for');
        forTag.forEach((item) => {
            const html = item.innerHTML;
            const count = +item.getAttribute('count');
            if(count){
                let _html = '';
                for (let i = 0; i < count; i++){
                    _html += html + '\n';
                }
                item.outerHTML = _html;
            }
        })
    }

    static getComponent(url, callBack){
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", url, false );
        xmlHttp.send( null );
        callBack(xmlHttp.responseText)
    }
}

forComponent.startCovertComponent()