const formatedDate = (date) => { //takes date stored in backend and converts it to more UI friendly.
        let splitDate = date.split("");
        let year = splitDate.slice(0,4);
        let day = splitDate.slice(8,10);
        let monthJoined = splitDate.slice(5,7).join('');
        let month = () => {
        if (monthJoined === "01") {
            return "January"
        } else if (monthJoined === "02"){
            return "February"
        }else if (monthJoined === "03"){
            return "March"
        }else if (monthJoined === "04"){
            return "April"
        }else if (monthJoined === "05"){
            return "May"
        }else if (monthJoined === "06"){
            return "June"
        }else if (monthJoined === "07"){
            return "July"
        }else if (monthJoined === "08"){
            return "August"
        }else if (monthJoined === "09"){
            return "September"
        }else if (monthJoined === "10"){
            return "October"
        }else if (monthJoined === "11"){
            return "November"
        }else if (monthJoined === "12"){
            return "December"
        }
    }
        let newDate = month() + " " + day.join('') + ", " + year.join('');
        
        return newDate;
    }

export default formatedDate;