
public class Queue{
  public static void main(String[] args) throws Exception {
    CustomQueue cq = new CustomQueue(5);

    for (int i = 0; i < 10; i++) {
      System.out.println(cq + " << до добавления");
      cq.offer(i);
      System.out.println(cq + " << после добавления");
      cq.poll();
      System.out.println(cq + " << после извлечения");

      System.out.println();
    }
  }
}

class CustomQueue {
  int capacity;
  private int[] storage;
  private int head = 0;
  private int tail = 0;
  private int count = 0;

  public CustomQueue(int value) {
    this.capacity = value;
    this.storage = new int[capacity];
  }

  public void offer(int value) throws Exception {

    if (this.count >= this.storage.length)
      throw new Exception("нет места");
    this.storage[this.head++] = value;
    this.count++;
    this.head %= this.capacity;
  }

  public int poll() throws Exception {
    if (this.count <= 0)
      throw new Exception("пусто");
    int element = this.storage[this.tail];
    this.storage[this.tail] = 0;
    this.tail++;
    this.tail %= this.capacity;
    this.count--;
    return element;
  }

  @Override
  public String toString() {
    String res = "";
    for (int i = 0; i < this.storage.length; i++) {
      if (this.storage[i] == 0) {
        res += ". ";
      } else {
        res += this.storage[i] + " ";
      }
    }
    return res;
  }
}