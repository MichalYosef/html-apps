function createDriverView(response)
{
    let driverHtml = makeAjaxRequest ({method:"GET", url: "templates/driver.html"})
    .then(function (response2) 
    {
        const bodyElement = document.getElementById('driversView');
        let drivers = JSON.parse(response);
        
        for(i=0 ; i<drivers.length ; i++)
        {
            let tmpTemplate = response2;    
            tmpTemplate = tmpTemplate.replace('{{id}}',drivers[i].id);
            tmpTemplate = tmpTemplate.replace('{{name}}',drivers[i].name);
            tmpTemplate = tmpTemplate.replace('{{gender}}',drivers[i].gender);
            const mainContainer = document.createElement('div');
            mainContainer.id = "driver"+[i];
            mainContainer.innerHTML = tmpTemplate;
            bodyElement.appendChild(mainContainer);
        }
    })
    .catch(function (err) 
    {
        console.error('Template, there was an error!', err.statusText);
    });
}

function generateMainScreen()
{
    const bodyElement = document.getElementsByTagName('body')[0];
    let mainView = document.createElement('div');
    let driversView = document.createElement('div');
    driversView.id = "driversView";
    driversView.class = "mainDeisgn";   
    let addressView = document.createElement('div');
    addressView.id = "addressView";
    addressView.class = "mainDeisgn";   
    let detailsView = document.createElement('div');
    detailsView.id = "detailsView";
    detailsView.class = "mainDeisgn";
    mainView.appendChild(driversView);
    mainView.appendChild(addressView);
    mainView.appendChild(detailsView);
    bodyElement.appendChild(mainView);

    
    
}