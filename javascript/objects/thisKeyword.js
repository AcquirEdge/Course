let cat = {
    name: "Fluffy",
    color: "White",
    describe: function() {
        console.log(this.name, this.color);
    },
    print: function() {
        console.log(this);
    }
}

cat.describe();
cat.print();