const jumpText = () => {
    let text = document.getElementsByClassName('heading')[0].innerText;
    // console.log(text)
    let get = [ ... text]
    // console.log(get)

    const content = get.reduce((value,alpha) => {
        return value+= `
        <span>${alpha}</span>
        `
    }, '')
    console.log("content: ", content);

    document.querySelector('.heading').innerHTML = content;
}

jumpText()
