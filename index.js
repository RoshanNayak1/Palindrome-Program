const Palindrome =()=>{
    let str = document.getElementById('input-box').value;
     let cleanstr = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase();

     if (str.trim() === '') {
        document.getElementById('output-para').innerHTML='Please enter a string to check';
        return ;
    }

     if (cleanstr===cleanstr.split('').reverse().join('')){
        document.getElementById('output-para').innerHTML = 'string is palindrome';
        
     }
     else{
        document.getElementById('output-para').innerHTML = 'string is not palindrome';
        
     }
     
}
window.onload = clearOutput;

Palindrome();



