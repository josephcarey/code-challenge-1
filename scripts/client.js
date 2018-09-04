console.log( 'js' );

// to keep track of how many times we've added a div
addCounter = 1;


$( 'document' ).ready( readyNow );

function readyNow() {
    console.log( 'jQ' );

    // Add listeners/handlers
    $( '#generateButton' ).on( 'click', handleGenerateButton );
    $( '#generatedDiv' ).on( 'click', '.deleteMeButton', handleDeleteMeButton )
    $( '#generatedDiv' ).on( 'click', '.swapColorButton', handleSwapColorButton )

}

function handleGenerateButton() {

    // template for new Divs
    newDivTemplate = `
    <div class="container col-12 red">
        <p>${addCounter}</p>
        <button class="swapColorButton btn btn-secondary">Swap Color</button>
        <button class="deleteMeButton btn btn-secondary">Delete</button>
    </div>
    `

    // do we actually need to append each button separately? That's how the assignment is describing it.

    // append the whole kit and kaboodle
    $( '#generatedDiv' ).append( newDivTemplate );

    // increment addCounter
    addCounter++;

}

function handleDeleteMeButton() {

    // closest is equivalent to running parent().first()
    this.closest( 'div' ).remove();

}

function handleSwapColorButton() {

    // toggleClass checks if a class is already on an object;
    // if yes, it takes it away; if no it adds it.
    // so, we call this on both the red class and the yellow class,
    // only one is ever present, so it effectively toggles it.
    $( this.closest( 'div' ) ).toggleClass( 'red yellow' );

}