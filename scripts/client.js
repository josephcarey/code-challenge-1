console.log( 'js' );

addCounter = 1;



$( 'document' ).ready( readyNow );

function readyNow() {
    console.log( 'jQ' );

    $( '#generateButton' ).on( 'click', handleGenerateButton );

}

function handleGenerateButton() {

    newDivTemplate = `
    <div class="container col-12">
        <h6>${addCounter}</h6>
        <button class="btn btn-primary">Swap Color</button>
        <button class="btn btn-danger">Delete</button>
    </div>
    `

    $( '#generatedDiv' ).append( newDivTemplate );

    addCounter++;

}