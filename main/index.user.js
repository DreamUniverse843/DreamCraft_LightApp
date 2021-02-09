import wx from '../wxsys/lib/base/wx';
import PageImpl from "../wxsys/lib/base/pageImpl";
var app = getApp();
export default class IndexPage extends PageImpl {
	constructor(...args){
		super(...args);
	}

  code(){
        //当前函数的代码为自动生成,请勿手动修改!!!

        function code() {
            if ((this.$compRefs.restData3.current.fyiji == 0)) {
                this.comp('restData3').setValue("fyiji", 1, undefined);
                this.comp('restData3').saveData(undefined);
                return;
            } else if (!(this.$compRefs.restData3.current.fyiji == 0)) {
                this.comp('restData3').setValue("fyiji", 0, undefined);
                this.comp('restData3').saveData(undefined);
                return;
            }
        }

        return code.apply(this, arguments);
    }

  code1(){
        //当前函数的代码为自动生成,请勿手动修改!!!

        function code() {
            if ((this.$compRefs.restData3.current.ferji == 0)) {
                this.comp('restData3').setValue("ferji", 1, undefined);
                this.comp('restData3').saveData(undefined);
                return;
            } else if (!(this.$compRefs.restData3.current.ferji == 0)) {
                this.comp('restData3').setValue("ferji", 0, undefined);
                this.comp('restData3').saveData(undefined);
                return;
            }
        }

        return code.apply(this, arguments);
    }

  code2(){
        //当前函数的代码为自动生成,请勿手动修改!!!

        function code() {
            if ((this.$compRefs.restData3.current.fsanji == 0)) {
                this.comp('restData3').setValue("fsanji", 1, undefined);
                this.comp('restData3').saveData(undefined);
                return;
            } else if (!(this.$compRefs.restData3.current.fsanji == 0)) {
                this.comp('restData3').setValue("fsanji", 0, undefined);
                this.comp('restData3').saveData(undefined);
                return;
            }
        }

        return code.apply(this, arguments);
    }

  code3(){
        //当前函数的代码为自动生成,请勿手动修改!!!

        function code() {
            if ((this.$compRefs.restData3.current.fsiji == 0)) {
                this.comp('restData3').setValue("fsiji", 1, undefined);
                this.comp('restData3').saveData(undefined);
                return;
            } else if (!(this.$compRefs.restData3.current.fsiji == 0)) {
                this.comp('restData3').setValue("fsiji", 0, undefined);
                this.comp('restData3').saveData(undefined);
                return;
            }
        }

        return code.apply(this, arguments);
    }

  code4(){
        //当前函数的代码为自动生成,请勿手动修改!!!

        function code() {
            if ((this.$compRefs.restData3.current.fwuji == 0)) {
                this.comp('restData3').setValue("fwuji", 1, undefined);
                this.comp('restData3').saveData(undefined);
                return;
            } else if (!(this.$compRefs.restData3.current.fwuji == 0)) {
                this.comp('restData3').setValue("fwuji", 0, undefined);
                this.comp('restData3').saveData(undefined);
                return;
            }
        }

        return code.apply(this, arguments);
    }
}
