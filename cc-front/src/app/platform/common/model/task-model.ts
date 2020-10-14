export class TaskModel {
    //id
    taskId?: string;
    //标题
    title?: string;
    //提交人
    createUser?: string;
    //创建时间
    createDate?: string;
    //url
    taskUrl?: string;
    //参数
    taskParameter?: string;
    //业务id
    busniessId?: string;
    //业务标识
    busniessMark?: string;
    checked?: boolean;
}

/**
 * 待办对象数据
 */
export class TaskObjModel {
    //总条数
    count: number;
    //列表
    tasks: Array<TaskModel>;
}

