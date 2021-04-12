# If there's no schema.prisma file, this copies all
# content from prisma/schemas and pastes it in there.
# Ideally, each schema in prisma/schemas should have spaces in both
# start and end.

prismaDir='example'

if [ -d $prismaDir/schemas ]; then
  if [ ! -f $prismaDir/schema.prisma ]; then
    touch $prismaDir/schema.prisma
    cat $prismaDir/base.prisma >> $prismaDir/schema.prisma

    for schema in $(ls $prismaDir/schemas); do
      cat $prismaDir/schemas/$schema >> $prismaDir/schema.prisma
    done
  else
    rm $prismaDir/schema.prisma
    echo 'Re-run the script to update the schema.'
  fi
fi
