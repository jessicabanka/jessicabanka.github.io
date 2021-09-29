var names=new Array();
names[0]="Yashika";
names[1]="Jessica";
names[2]="Jason";
names[3]="Jenni";
names[4]="john";
names[5]="priya";
names[6]="franklin";
names[7]="lakshita";
names[8]="pauli";
names[9]="lauren";
names[10]="jerry";

for (var i = 0; i <names.length; i++) {
	if(names[i].charAt(0)=='J'||names[i].charAt(0)=='j'){
	console.log("Goodbye "+ names[i]);

}
else
    console.log("Hello "+ names[i]);
}
