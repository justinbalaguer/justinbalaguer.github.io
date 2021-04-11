const root = document.querySelector('#root');
const version = 'v0.0.1'
let str = '';
let vals = [];

const newLine = () => {
  str += `
    <div class='line'>
      <p class='green'>jstn@root<span class='white'>:</span><span class='blue'>~</span><span class='white'>$&nbsp;</span></p>
      <input class='command white' />
    </div>
  `;
  root.innerHTML = str;
  focusInput();
}

const focusInput = () => {
  let lastIndex = document.getElementsByTagName('input').length;
  document.getElementsByTagName('input')[lastIndex - 1].focus();
}

const help = () => {
  str += `
  <div class='white'>
    <span>¯&#92;_(ツ)_/¯</span>
    <p>Commands:</p>  
    <p>$ info -- shows my information</p>  
    <p>$ help -- show all available commands</p>  
    <p>$ clear -- clears all the line</p>  
    <p>$ version -- show version</p>  
  </div>`;
  root.innerHTML = str;
}

/* start script */
(() => {
  help();
  newLine();
  focusInput();

  document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      let lastIndex = document.getElementsByTagName('input').length;
      let cmd = document.getElementsByTagName('input')[lastIndex - 1].value;
      vals.push(cmd);
      setTimeout(() => {
        for(let i = 0; i < vals.length; i++) {
          document.getElementsByTagName('input')[i].value = vals[i];
        }
      }, 100);

      if(cmd == 'version') {
        str += `<p class='white'>${version}</p>`;
        root.innerHTML = str;
      } else if(cmd == 'clear') {
        vals = [];
        str = '';
        root.innerHTML = '';
      } else if(cmd == 'help') {
        help();
      } else if(cmd == 'info') {
        str += `
        <div class='white'>
          <div class='ascii'>
            <span class='gray'>@@@@@@@</span>&jk2jootcj<span class='gray'>@@@@@@@@@@@@@</span>
            <span class='gray'>@@@@</span>Kuc0<span class='gray'>@@@@@@@@</span>Bvk<span class='gray'>@@@@@@@@@@@</span>
            <span class='gray'>@@</span>NlB<span class='gray'>@@@@@@@@@@@@@</span>D]BAyk2tjjv}
            <span class='gray'>@</span>ER<span class='gray'>@@@@@@@@@@@@@</span>RyjKy#<span class='gray'>@@@</span>9cnK<span class='gray'>@</span>
            <span class='gray'>@</span>}s<span class='gray'>@@@@@@@</span>#9kyuzQArA-EKyo8<span class='gray'>@@@@</span>
            <span class='gray'>@</span>f}<span class='gray'>@@@</span>RyyyK8<span class='gray'>@</span>jK<span class='gray'>@@</span>Brayy<span class='gray'>@@@@@@@@</span>
            <span class='gray'>@</span>#~gzonls&@R'}<span class='gray'>@@@@@@</span>#-<span class='gray'>@@@@@@@@</span>
            <span class='gray'>@@</span>d#@#'Q<span class='gray'>@@</span>Bd 8<span class='gray'>@@@@@@@</span>'<span class='gray'>@@@@@@@@</span>
            <span class='gray'>@@</span>-#<span class='gray'>@@</span>#~ya8<span class='gray'>@</span>#S#<span class='gray'>@@@@@</span>#-<span class='gray'>@@@@@@@@</span>
            R y*x]/Yv<span class='gray'>@@@@@</span>#<span class='gray'>@</span>BRKkYd<span class='gray'>@@@@@@@@</span>
            <span class='gray'>@@@</span>y#;|#<span class='gray'>@@@@@</span>0~@##<span class='gray'>@@@@@@@@@@@@</span>
            <span class='gray'>@@@@</span>&|&<span class='gray'>@@@@@@</span>'<span class='gray'>@@@@@@@@@@@@@@@@</span>
            <span class='gray'>@@@@@@</span>&l1UB<span class='gray'>@@</span>Qr<span class='gray'>@@@@@@@@@@@@@@@</span>
            <span class='gray'>@@@@@@@@@</span>#qyktr8<span class='gray'>@@@@@@@@@@@@@@</span>           
          </div>
          <div class='ascii'>
            &nbsp;&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;______&nbsp;&nbsp;________&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;\&nbsp;&nbsp;|&nbsp;&nbsp;\
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\$$$$$|&nbsp;&nbsp;$$$$$$\\$$$$$$$$|&nbsp;$$\&nbsp;|&nbsp;$$
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;$$|&nbsp;$$___\$$&nbsp;&nbsp;|&nbsp;$$&nbsp;&nbsp;&nbsp;|&nbsp;$$$\|&nbsp;$$
            &nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;|&nbsp;$$&nbsp;\$$&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;|&nbsp;$$&nbsp;&nbsp;&nbsp;|&nbsp;$$$$\&nbsp;$$
            &nbsp;|&nbsp;&nbsp;\&nbsp;&nbsp;|&nbsp;$$&nbsp;_\$$$$$$\&nbsp;&nbsp;|&nbsp;$$&nbsp;&nbsp;&nbsp;|&nbsp;$$\$$&nbsp;$$
            &nbsp;|&nbsp;$$__|&nbsp;$$|&nbsp;&nbsp;\__|&nbsp;$$&nbsp;&nbsp;|&nbsp;$$&nbsp;&nbsp;&nbsp;|&nbsp;$$&nbsp;\$$$$
            &nbsp;&nbsp;\$$&nbsp;&nbsp;&nbsp;&nbsp;$$&nbsp;\$$&nbsp;&nbsp;&nbsp;&nbsp;$$&nbsp;&nbsp;|&nbsp;$$&nbsp;&nbsp;&nbsp;|&nbsp;$$&nbsp;&nbsp;\$$$
            &nbsp;&nbsp;&nbsp;\$$$$$$&nbsp;&nbsp;&nbsp;\$$$$$$&nbsp;&nbsp;&nbsp;&nbsp;\$$&nbsp;&nbsp;&nbsp;&nbsp;\$$&nbsp;&nbsp;&nbsp;\$$
          </div>
          <p>Name: Justin Balaguer</p>
          <p>Address: Legazpi City, PH</p>
          <p>Email: <a class='white' href='mailto:justinanthony.primary@gmail.com'>justinanthony.primary@gmail.com</a></p>
          <p>GitHub: <a class='white' href='https://github.com/justinbalaguer' target='_blank'>https://github.com/justinbalaguer</a></p>
          <p>LinkedIn: <a class='white' href='https://www.linkedin.com/in/justinbalaguer/' target='_blank'>https://www.linkedin.com/in/justinbalaguer/</a></p>
        </div>
        `;
        root.innerHTML = str;
      } else {
        str += `<p class='white'>${cmd}: command not found</p>`;
        root.innerHTML = str;
      }

      newLine();
    }
  });

  document.addEventListener("click", function(){
    let lastIndex = document.getElementsByTagName('input').length;
    document.getElementsByTagName('input')[lastIndex - 1].focus();
  });
})();