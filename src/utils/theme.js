const toggleTheme= () => {

const toggleThemeBtn=document.querySelectorAll('#theme-toggle');

// state variable
const theme=localStorage.getItem('theme')

// on mount
if(theme)
{
    document.body.classList.add(theme);
}
const handleThemeToggle = () => {
    document.body.classList.toggle('light-mode');
    if(document.body.classList.contains('light-mode'))
    {
        localStorage.setItem('theme','light-mode');
    }
    else
    {
        localStorage.removeItem('theme');
    }
};

// Events
toggleThemeBtn.forEach((btn)=>{
    btn.addEventListener('click',handleThemeToggle);
}); 

}
export default toggleTheme;
