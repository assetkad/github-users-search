export class Log{
    constructor (){

    }
    countMessage(counter){
        return counter ? `Найдено ${counter} пользоватлей` : `Ничего не найдено`;
    }
}