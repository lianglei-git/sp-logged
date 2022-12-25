class A {
    click() {
        this.file += 10;
        console.log(this.file);
        return this;
    }
    cout = 10;
    get file() {
       return this.cout;
    }
    set file(v) {
       return this.cout = v;
    }
}

new A().click().click().click();