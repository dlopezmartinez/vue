const app = Vue.createApp({
  data() {
    return {
      keys: [],
      output: "",
      confirmedOutput: "No output confirmed",
    };
  },
  methods: {
    sendAlert() {
      alert("Alert button clicked!!!");
    },
    keyPressed(event) {
      this.keys.push(event.key);
    },
    showKeyPressed() {
      if (!this.keys.length) return "No output";
      return this.keys.join("");
    },
    setOutput(event) {
      this.output = event.target.value;
    },
    setConfirmedOutput() {
      this.confirmedOutput = this.output;
    },
  },
});

app.mount("#assignment");
