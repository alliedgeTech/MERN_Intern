

class HumanQuality{

    eat(){
        console.log("eat is ...")
    }
    sleep(){
        console.log("sleep is ...")
    }
    walk(){
        console.log("walk is ...")
    }
    talk(){
        console.log("talk is ...")
    }
    UseMoble(){
        console.log("UseMoble is ...")
    }
}
let obj = new HumanQuality()
console.log("parent",obj);


class Engineer extends HumanQuality {

    coding(){
        console.log("coding is ...")
    }
    testing(){
        console.log("testing is ...")
    }
    debugging(){
        console.log("debugging is ...")
    }
    designing(){
        console.log("designing is ...")
    }
    deploy(){
        console.log("deploy is ...")
    }
    UseMoble(){
        console.log("UseMoble is ...")
    }

}
let childobj = new Engineer()
{
    console.log("childobj",childobj);
}