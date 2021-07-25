const html = `
<div class="section">
  <div>
    <h1>Welcome to Playgroundd</h1>
    <p> A simple playground for HTML, CSS and JavaScript</p>
    <a href="https://github.com/shipless/play">Github</a>
  </div>
</div>
`

const scss = `
body {
  background: #97a2a9;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
}

.section {
  background: #fff;
  max-width: calc(100vw - 20%);
  max-height: calc(100vw - 20%);
}

.section div {
  padding: 40px;
}

.section h1 {
  margin: 0;
}
`

const javascript = `
// console.log("Your js")
`

export default {
  html, scss, javascript,
}