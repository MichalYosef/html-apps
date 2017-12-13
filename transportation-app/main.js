(function() {
    generateMainScreen();
    
    getDrivers()
    .then(function (response) 
    {
       createDriverView(response);
   
   
        

    })
    .catch(function (err) 
    {
        console.error('Augh, there was an error!', err.statusText);
    });


    
    
    
        
     //   createIndexFile();
    



        
    

    // createIndexFile()
    // {
    //     const mainContainer = document.createElement('div'); 
    //     mainContainer.className += "container-fluid";
    //     bodyElement.appendChild(mainContainer);
    // }
    // -------------------- show exist data ------------ //
    

    // getDrivers().then(function(response) {
    //     // Code
    //     // Take driver template and attach drivers data, append all to driversContainer
    // });




    // -------------------- create new data ------------ //
    const addAddressButton = document.getElementById('addAddress');
}());
