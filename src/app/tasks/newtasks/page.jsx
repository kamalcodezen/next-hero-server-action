import { addNewTasks } from "@/lib/createATask";
import {
  Button,
  Input,
  Label,
  ListBox,
  TextField,
  Select,
  Modal,
} from "@heroui/react";

const NewTasks = () => {
  return (
    <div className="w-[30%] mx-auto">
      <form action={addNewTasks} className="flex flex-col gap-4">
        <TextField className="w-full" name="title" type="text">
          <Label>Title</Label>
          <Input placeholder="Task title" />
        </TextField>
        <TextField className="w-full" name="description" type="text">
          <Label>Description</Label>
          <Input placeholder="Task Description" />
        </TextField>

        <Select name="status" className="w-[256px]" placeholder="Select one">
          <Label>Status</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="pending" textValue="Pending">
                Pending
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="progress" textValue="Progress">
                Progress
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="complete" textValue="Complete">
                Complete
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <Select name="priority" className="w-[256px]" placeholder="Select one">
          <Label>Priority</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="high" textValue="High">
                High
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="medium" textValue="Medium">
                Medium
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="low" textValue="Low">
                Low
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <TextField className="w-full" name="assign" type="text">
          <Label>Assign</Label>
          <Input placeholder="Task Description" />
        </TextField>

        <Modal.Footer>
          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button type="submit">Add Task</Button>
        </Modal.Footer>
      </form>
    </div>
  );
};

export default NewTasks;
