from tkinter import*
from math import sqrt
main = Tk ()
main.title ("CALCULADORA")
SCREEN = Entry(main,font=("arial",20,"bold"),width=18,
               justify="right",
               background="black",
               foreground="white")
SCREEN.pack(padx=10,pady=(10,0),ipady=10,fill=BOTH)
SCREEN.insert(0,"0")
TECLADO = Frame(main);TECLADO.pack(pady=10,padx=10)
#VALORES DE LOS BOTONES
BTN = [["C","X²","%","√"],
["7","8","9","/"],["4","5","6","X"],
["1","2","3","-"],[".","0","=","+"]]
#FUNCION PARA CADA FUNCION
def press_btn(text):
    match text:
        case "=":
            result = eval(SCREEN.get().replace("²","**2"))
            SCREEN.delete(0,"end")
            SCREEN.insert(0,result)
        case "C":
            SCREEN.delete(0,"end")
        case "√":
            result = sqrt(float(SCREEN.get()))
            SCREEN.delete(0,"end")
            SCREEN.insert(0,result)
        case _:
            if SCREEN.get()=="0":
                SCREEN.delete(0,1)
            SCREEN.insert(END,text.replace("X²","²").replace("X","*"))
#FUNCION QUE DEVUELVE EN LAMBDA PARA CADA FUNCION:
def funcion_btn(text):
    return lambda:press_btn(text)
#CREA OS BOTONES
for i in range(5):
    for j in range (4):
        Button(TECLADO,
               width=6,
               height=3,
               background="#33C1FF",
               foreground="black",
               font=("arial",12,"bold"),
               text=BTN[i][j],
               command=funcion_btn(BTN[i][j]),
               cursor="hand2").grid(row=i,column=j)
main.mainloop()