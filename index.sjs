//python -m SimpleHTTPServer

whenPageLoads{
    guy = new Sprite(0, -100, "sprite_image.jpeg")
    output = new Sprite(200, 0, "<div><h3>Output<h3></div>")
    list = []
    askForList()
}

askForList{
    answer = guy.ask("Enter your data (name, DOB)").then({ //you can add more feilds
        if(this.answer == "exit"){
            sortTheList()
            guy.speechBuble.hide()
        }else{
            rows = this.answer.split(",")
            rows[1] = Number(new Date(rows[1]))
            list.push(rows)
            askForList()
        }
    })
}

sortTheList{
    didISwap = true
    while(didISwap){
        currentIndex = 0
        didISwap = false
        repeat({
             if(Number(list[currentIndex][1]) > Number(list[currentIndex + 1][1])){
                temp = list[currentIndex + 1]
                list[currentIndex + 1] = list[currentIndex]
                list[currentIndex] = temp
                didISwap = true
             }
             currentIndex = currentIndex + 1
        }, list.length - 1)
    }
    for(person of list){
        bday = new Date(person[1])
        think(bday)
        output.element.innerHTML += "<br>"+person[0] + " - " + (bday.getMonth()+1) + "/" + bday.getDate() + "/" + bday.getFullYear()
    }
}


/*
people[firstListIndex][subListIndex]

1. person1
    a) David
    b) 79
    c)888
2

*/






















/*
whenPageLoads{
    guy = new Sprite(0, 0, "sprite_image.jpeg")
    list = []
    askForList()
}

askForList{
    answer = guy.ask("Enter your data (name, age, phone-number...)").then({
        if(this.answer == "exit"){
            sortTheList()
            guy.speechBuble.hide()
        }else{
            rows = this.answer.split(",")
            list.push(rows)
            askForList()
        }
    })
}

sortTheList{
    didISwap = true
    while(didISwap){
        currentIndex = 0
        didISwap = false
        repeat({
             if(list[currentIndex] > list[currentIndex + 1]){
                temp = list[currentIndex + 1]
                list[currentIndex + 1] = list[currentIndex]
                list[currentIndex] = temp
                didISwap = true
             }
             currentIndex = currentIndex + 1
        }, list.length - 1)
    }
    think(list)
}

*/