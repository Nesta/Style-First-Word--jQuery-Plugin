describe("styleFirstWord Plugin", function() {
	var heading;

	beforeEach(function() {
	  heading = $('<h1>My Heading Goes Here</h1>');
	});

	it("should be under the jQuery namespace", function() {
		expect($.fn.styleFirstWord).toBeDefined();
	});

  it("should wrap the first word of a heading in a span", function() {
  	heading.styleFirstWord();
    expect(heading).toContain('span');
  });

  it("should work on a collection of headings", function() {
   	var headings = $('<h1>heading one</h1><h1>heading two</h1>');
   	headings.styleFirstWord();
   	expect(headings.eq(0)).toContain('span');
   	expect(headings.eq(1)).toContain('span');
  });

  it("should accept a class name that is applied to the added span", function() {
  	heading.styleFirstWord('flashy');
  	expect($('span', heading)).toHaveAttr('class', 'flashy');
  });

  it("should apply a default class name of 'firstWord' to the span if no value is provided", function() {
    heading.styleFirstWord();
    expect($('span', heading)).toHaveAttr('class', 'firstWord')
  });

  it("should alternatively accept an attr config object, which will be applied to the span", function() {
  	heading.styleFirstWord({
  		id: 'some-id',
  		'data-something': 'nice'
  	});

    expect($('span', heading)).toHaveAttr('id', 'some-id');
    expect($('span', heading)).toHaveAttr('data-something', 'nice');
  });
});


// $('h1').styleFirstWord('flash')
// $('h1').styleFirstWord({
// 	id: 'first-word',
// 	class: 'some-class'
// })