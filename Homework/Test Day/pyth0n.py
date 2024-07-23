import tkinter as tk
from tkinter import messagebox
import random

class ClickerGame:
    def __init__(self, master):
        self.master = master
        self.master.title("Кликер на подобие Hamster Combat")
        self.master.geometry("400x300")
        
        self.points = 0
        
        self.create_widgets()
    
    def create_widgets(self):
        self.label_points = tk.Label(self.master, text=f"Очки: {self.points}", font=("Helvetica", 18))
        self.label_points.pack(pady=20)
        
        self.click_button = tk.Button(self.master, text="Кликнуть!", command=self.click_button_clicked)
        self.click_button.pack()
        
        self.reset_button = tk.Button(self.master, text="Сбросить очки", command=self.reset_points)
        self.reset_button.pack(pady=10)
    
    def click_button_clicked(self):
        self.points += random.randint(1, 10)  # Увеличиваем очки на случайное число от 1 до 10
        self.update_points_label()
    
    def reset_points(self):
        self.points = 0
        self.update_points_label()
    
    def update_points_label(self):
        self.label_points.config(text=f"Очки: {self.points}")
        

def main():
    root = tk.Tk()
    clicker_game = ClickerGame(root)
    root.mainloop()

if __name__ == "__main__":
    main()
