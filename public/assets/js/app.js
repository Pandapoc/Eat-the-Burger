document.addEventListener('click', e => {
    if (e.target.id === 'sbmt') {
        fetch(`/burger`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                burgerName: document.querySelector('#burger').value
            })
        })

    } else if (e.target.id === 'devour') {
        let burger = {}
        burger.devoured = true
        fetch(`/burger/${e.target.dataset.uid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(burger)
        })
    }
})