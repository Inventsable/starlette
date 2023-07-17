export { };

import "../public/CSInterface";
declare global {
    interface Window {
        cep_node: {
            Buffer: Function;
            global: object;
            process: object;
            require: Function
        };
        __adobe_cep__: {
            getHostEnvironment: Function;
            addEventListener: Function;
            dispatchEvent: Function;
        };
        localStorage: {
            getItem: Function;
            setItem: Function;
        };
    }


}