
import availableParts from '../DATA/parts';

export default {
  getPartByKey(key, id){
    return availableParts[key][id];
  },
  getRobotsList(){
    return JSON.parse(localStorage.getItem('robots')) || [];
  },
  addRobot(robot){
    robot.cost = robot.head.cost +
      robot.leftArm.cost +
      robot.torso.cost +
      robot.rightArm.cost +
      robot.base.cost;
    let db = this.getRobotsList();
    db.push(robot);
    localStorage.setItem('robots', JSON.stringify(db));
  },
  removeRobot(){
    let db = this.getRobotsList();
    db.pop()
    localStorage.setItem('robots', JSON.stringify(db));
  },
}
