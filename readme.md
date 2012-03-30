For those rare times when you need to style the first word in a particular element, such as an h1 tag.

    $('h1').styleFirstWord()

    // or
    $('h1').styleFirstWord({
    	id: 'some-id',
    	class: 'first-word'
    });

That last snippet will turn:

    <h1>My Heading Here</h1>

Into:

    <h1><span id="some-id" class="first-word">My</span> Heading Here</h1>

## Installation

Just download the plugin from the `public/javascripts/` folder, import it into your project (below jQuery), and you're good to go!