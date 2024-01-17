import axios from 'axios';

export const VerificaLoginMixin = {
    methods: {
        async logged() {
            try {
                const response = await axios.get(process.env.VUE_APP_BASE_URI + 'logged');
                if (response.data.logged) {
                    console.log('L\'utente è loggato!');
                } else {
                    console.log('L\'utente non è loggato.');
                }
            } catch (error) {
                console.error('Errore nella verifica dello stato di login:', error);
            }
        },
    },
};
