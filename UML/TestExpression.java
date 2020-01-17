
package baitapthuattoan; 
interface Expression {
	int eval();
}
class VarExp implements Expression {
	 private int var;
	 public VarExp() {};
	 public void setValue(int n) {
	 var = n;
	 } 
	 public int eval() {
		 return var; //A
	} 
}


class SeqExp implements Expression {
	 private int op;
	 private Expression exp1, exp2; // B
	 public SeqExp(Expression e1, Expression e2, int a_op) {
	 exp1 = e1;
	 exp2 = e2;
	 op = a_op;
	 }

	 public int eval() {
	 switch (op) {
	 case 0:
	 return exp1.eval() + exp2.eval(); 
	 case 1:
	 return exp1.eval() - exp2.eval();
	 case 2:
	 return exp1.eval() * exp2.eval();
	 case 3:
	 return exp1.eval() / exp2.eval();
	 }
	 return 0;
	 }

	 public SeqExp operate(Expression e, int a_op) {
		 return new SeqExp(this, e, a_op); //C

	 }
	}


	public class TestExpression {
		 public static void main(String args[]) {
	
		 VarExp a = new VarExp();
		 VarExp b = new VarExp();
	
		 SeqExp sum = new SeqExp(a, b, 0);
		 SeqExp diff = new SeqExp(a, b, 1);
		 SeqExp mul = sum.operate(diff,2);
	
		 a.setValue(9);
		 b.setValue(6);
		 System.out.print(mul.eval());
	 }
	} 
// Dependency: A lúc này có mối quan hệ dependency với B(Khi B xuất hiện trong 1 hàm nào đó của A - B là local variable) 
// A{
// 	A(){}
// 	a(){ 
// 		B b;
// 	}
// }
// B{...}

// => Mũi tên
// Association: A lúc này có mối quan hệ association với B (Khi B là 1 thuộc tính của A ! nhưng không được khởi tạo)
// A{
// 	B b;
// 	A(){}
// 	a(){ ... }
// }
// B {...}

// => Thoi rỗng
// Aggretion: A lúc này có mối quan hệ aggretion với B (Khi B được gán giá trị trong hàm tạo hoặc khởi tạo là thuộc tính)
// A{
// 	B b = new B();
// 	A(){}
// 	a(){}
// }


// hoặc 
// A{
// 	B b;
// 	A(B b){
// 		b = b;
// 	}
// }

// B{...}



// => Thoi đục
// Composition: A lúc này có mối quan hệ composition với B (Khi B là 1 biến final của A)
// A{
// 	final B b = new B();
// 	...
// }
// B{...}
