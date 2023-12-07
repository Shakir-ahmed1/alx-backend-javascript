/// <reference path="Cpp.ts" />
/// <reference path="./Subject.ts" />
namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }
    export class React extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for React";
        }
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}