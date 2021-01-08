
const refreshList = async function(){
    $('#container').empty()
    const posts  = await $.get('/posts')
    posts.forEach(p=>{
        $('#container').append(`<p>${p.text}</p>`)
    })

}

refreshList()

$('button').on('click',async function(){
    console.log('clicked')
    const text = $('input').val()
    await $.post('/post',{text})
    $('input').val('')
    refreshList()
})

