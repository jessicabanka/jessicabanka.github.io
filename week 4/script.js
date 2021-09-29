var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jason";
names[3]="Jen";
names[4]="jason";
names[5]="paul";
names[6]="frank";
names[7]="larry";
names[8]="paula";
names[9]="laura";
names[10]="jim";

for (var i = 0; i <names.length; i++) {
	if(names[i].charAt(0)=='J'||names[i].charAt(0)=='j'){
	console.log("Good Bye "+ names[i]);

}
else
    console.log("Hello "+ names[i]);
}
