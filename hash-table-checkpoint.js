
function compressArray(arr) {
 
	var compressed = [];
	arr = arr.split(/[ .?!,*'"]/);
	var copy = arr.slice(0);
	for (var i = 0; i < arr.length; i++) {
		var myCount = 0;	
		for (var w = 0; w < copy.length; w++) {
			if (arr[i] == copy[w]) {
				myCount++;
				delete copy[w];
			}
		}
		if (myCount > 0 && arr[i] != "") {
			var wordAndFrequency = new Object();
			wordAndFrequency.value = arr[i];
			wordAndFrequency.count = myCount;
			compressed.push(wordAndFrequency);
		}
	}
 
	return compressed;
};

function mapNoteCreate(wordAndFrequency){
	var hashMapNote = new Map(Object.entries(wordAndFrequency));
	return hashMapNote;
}

function mapNewsPaperCreate(wordAndFrequency){
	var hasMapNewsPaper = new Map(Object.entries(wordAndFrequency));
	return hashMapNewsPaper;
}

function doesNoteExistInPaper(hashMapNote, hashMapNewsPaper){
	hashMapNewsPaper.includes(hashMapNote);
}

