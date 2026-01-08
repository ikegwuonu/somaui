"use client";
import { Button } from "@somaui/ui/button";
import { ActionIcon } from "@somaui/ui/action-icon";
import React from "react";

const ButtonUI = () => {
  return (
    <>
      {" "}
      <div>
        <p className="my-2">Buttons</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button className="bg-blue-700" variant="solid">
          Solid
        </Button>
        <Button isLoading variant="outline" size="sm">
          Outline
        </Button>
        <Button variant="flat" disabled>
          Flat
        </Button>
        <Button variant="text">Text</Button>
        <Button variant="danger">Danger</Button>
        <Button size="sm">Button</Button>
        <Button>Button</Button>
        <Button size="lg">Button</Button>
        <Button isLoading={false} size="sm">
          Solid
        </Button>
        <Button isLoading={false} variant="outline">
          Outline
        </Button>
        <Button isLoading={false} variant="flat">
          Flat
        </Button>
        <Button isLoading={false} variant="danger">
          Danger
        </Button>
        <ActionIcon size="sm">
          <p children="kk" className="w-4 h-4" />
        </ActionIcon>
        <ActionIcon>
          <p children="kk" className="size-5 bg-red" />
        </ActionIcon>
        <ActionIcon size="lg">
          <p children="kk" className="w-6 h-6 " />
        </ActionIcon>
        <ActionIcon variant="solid">
          <p>yhg</p>
        </ActionIcon>
        <ActionIcon variant="outline">
          <p children="77" />
        </ActionIcon>
        <ActionIcon variant="flat">
          <p children="77" />
        </ActionIcon>
        <ActionIcon variant="danger">
          <p children="77" />
        </ActionIcon>
      </div>
    </>
  );
};

export default ButtonUI;
