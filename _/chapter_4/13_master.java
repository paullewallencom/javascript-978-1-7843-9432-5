class Master {
    Orc[] guards;
    public Master(Orc[] guards) {
       this.guards = guards;
    }

    public void figthOfAttack(String[] attackers) {
        for(int i = 0; i < attackers.length; i++) {
            System.out.println(guards[i].kill(attackers[i]));
        }
    }
}
