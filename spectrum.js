function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		
		// fill(0,255,0)
		// for (var i = 0; i< spectrum.length; i++){
		// 	var x = map(i, 0, spectrum.length, 0, width);
		//     var h = -height + map(spectrum[i], 0, 255, height, 0);
		//     rect(x, height, width / spectrum.length, h );
  		// }
		
		//transposing spectrum from vertical to horizontal 
		
		//mapping red
		for (var i = 0; i< spectrum.length; i++){
		
		fill(spectrum[i], map(spectrum[i],0,255,255,0), 0)
		
		var w = map(i, 0, spectrum.length, 0, height);
		var y =  map(spectrum[i], 0, 255, 0, width);
		
		rect(0, w, y, height/ spectrum.length);
		}     
	
	
	
		pop();
	};
}
