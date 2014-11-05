describe("mommify", function() {
	it("should not mommify if the vowels less than 30%", function() {
		var expected = "hmm";
		var result = mommify("hmm");

		expect(result).toEqual(expected);
	});

	it("should mommify if the vowels greater than 30%", function() {
		var expected = "shmommy";
		var result = mommify("she");
		
		expect(result).toEqual(expected);
	});
});