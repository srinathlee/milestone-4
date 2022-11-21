/* eslint-disable no-undef */
 /* eslint-disable no undef */ 
 var dateToday = new Date()
const todoItem=require('../todo');

const{ all, add, markAsComplete, overdue, dueToday, dueLater}= todoItem();

describe("Todolist Test Suite",()=>{
    beforeAll(()=>{
        add(
            {
                title: "html",
                completed: false,
                dueDate: dateToday.getDate() - 1,

            }
          );

        add(
            {
                title: "css",
                completed: false,
                dueDate:dateToday.getDate() - 1 ,

            }
        );

        add(
            {
                title: "javascript",
                completed: false,
                dueDate: dateToday.getDate() +1,

            }
        );

        add(
            {
                title: "python",
                completed: false,
                dueDate: dateToday.getDate(),

            }
        );

        add(
            {
                title: "c++",
                completed: false,
                dueDate: dateToday.getDate() +1,

            }
        );
    })
    
    test("Should add new todo",()=>{
        const todoItemsCount = all.length;
        add(
            {
                title:" Test todo",
                completed:false,
                dueDate: dateToday.getDate() +1,
            }
        );
        expect(all.length).toBe(todoItemsCount+1);
    });
    
    test("this should mark as todo as complete",()=>{
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })

    test("verify retrival of overdue items", () => {
        let t = overdue();
        expect(t.length).toBe(2);
        expect(t[0]).toBe(all[0]);
        expect(t[1]).toBe(all[1]);

      });

      test("verify retrival of today dueitems", () => {
        let s= dueToday();
        expect(s.length).toBe(1);
        expect(s[0]).toBe(all[3]);
      });

      test("verify retrival of duelater items", () => {
        let r = dueLater();
        expect(r.length).toBe(3);
        expect(r[0]).toBe(all[2]);
        expect(r[1]).toBe(all[4]);
        expect(r[2]).toBe(all[5]);
      });
});