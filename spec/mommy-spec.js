describe("mommify", function() {
	it("should not mommify if the vowels less than 30%", function() {
		var expected = "hmm";

		var result = mommify("hmm");

		expect(result).toEqual(expected);
	});
});