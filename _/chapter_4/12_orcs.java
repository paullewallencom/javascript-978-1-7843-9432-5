interface Orc {
    abstract public String kill(String attacker);
}

class SwordMaster implements Orc {
    public String kill(String name) {
        return "Slash " + name;
    }
}

class AxeMaster implements Orc {
    public String kill(String name) {
       return "Split " + name;
    }
}