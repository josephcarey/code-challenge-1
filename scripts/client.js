console.log( 'js' );

addCounter = 1;



$( 'document' ).ready( readyNow );

function readyNow() {
    console.log( 'jQ' );

    $( '#generateButton' ).on( 'click', handleGenerateButton );
    $( '#generatedDiv' ).on( 'click', '.deleteMeButton', handleDeleteMeButton )

}

function handleGenerateButton() {

    newDivTemplate = `
    <div class="container col-12">
        <h6>${addCounter}</h6>
        <button class="swapColorButton btn btn-primary">Swap Color</button>
        <button class="deleteMeButton btn btn-danger">Delete</button>
    </div>
    `

    $( '#generatedDiv' ).append( newDivTemplate );

    addCounter++;

}

function handleDeleteMeButton() {

    console.log( this );


}