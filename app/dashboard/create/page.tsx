import { handleSubmisison } from "@/app/actions";
import { SubmitButtom } from "@/components/general/Submitbutton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

export default function CreateBlogroute() {

    return (
      <div>
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Create Post</CardTitle>
            <CardDescription>
              Create a new post to share with the world
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4" action={handleSubmisison}>
              <div>
                <Label className="flex flex-col gap-2">Title</Label>
                <Input name="title" required type="text" placeholder="Title"/>
              </div>

              <div className="flex flex-col gap-2">
                <Label>Content</Label>
                <Textarea name="content" required placeholder="Content" />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Image URL</Label>
                <Input name="url" required placeholder="Image URL" />
              </div>

          <SubmitButtom />
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
  