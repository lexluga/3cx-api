# 3CX Phone System API

This set of API provides an interface to 3CX Phone System. 
Only a limited amount of items is available but feel free to contact me for extending the list.

Available:
- Reports
- System status
- Current user information
- Extension, Group, Fax, Phonebook contents view

# Getting started

Installation:
    
    npm install @3cx/api --save
  
# Usage

This is a sample on how to get system status information. Please supply your FQDN:port and access credentials.

    import {createClient, ConsoleClient} from '@3cx/api';

    async function main(){
        const http = await createClient('http://secure.3cx.my:5000', {Username: 'Admin', Password: '############'});
        const api = new ConsoleClient(http);

        console.log(await api.getSystemStatus());
    }

    main();
