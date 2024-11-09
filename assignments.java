package com.example.eestecolympics2024;

public class assignments {
    private String dueDate;
    private String material;

    public assignments(String dueDate, String material) {
        this.dueDate = dueDate;
        this.material = material;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }
}
