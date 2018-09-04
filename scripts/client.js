console.log( 'js' );

addCounter = 1;

newDivTemplate = `
    <div class="container col-12">
        <p>Number</p>
        <button class="btn btn-primary">Swap Color</button>
        <button class="btn btn-primary">Delete</button>
    </div>
`

$( 'document' ).ready( readyNow );

function readyNow() {
    console.log( 'jQ' );

    $( '#generateButton' ).on( 'click', handleGenerateButton );

}

function handleGenerateButton() {

    console.log( 'in handle Genetare Button' );

    $( '#generatedDiv' ).append( newDivTemplate );

}